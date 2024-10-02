import { Injectable } from '@nestjs/common';
import {
  MonthlyReportsResponseDTO,
  StoresResponseDTO,
  CountriesResponseDTO,
} from './dto';
import { PrismaService } from 'src/prisma/prisma.service';

type AggregatedData = {
  trackDownloads: number;
  streams: number;
  totalSales: number;
  earnings: number;
  date: string; // Will be in "Month Year" format
  year: number;
  month: number;
};

@Injectable()
export class SalesReportService {
  constructor(private readonly prisma: PrismaService) {}
  async createMonthlyReport(monthlyReportDto: MonthlyReportsResponseDTO) {
    const MonthlyReports = this.createMonthlyReportData(monthlyReportDto);

    // Bulk insert monthly reports
    await this.prisma.monthlyReport.createMany({
      data: MonthlyReports,
    });

    // Return success message
    return 'Monthly reports inserted successfully!';
  }

  async createReportByStore(storeReportDto: StoresResponseDTO) {
    const StoreReports = this.createStoreReportData(storeReportDto);

    // Bulk insert store reports
    await this.prisma.store.createMany({
      data: StoreReports,
    });

    // Return success message
    return 'Store reports inserted successfully!';
  }

  async createReportByCountry(countryReportDto: CountriesResponseDTO) {
    const CountryReports = this.createCountryReportData(countryReportDto);

    // Bulk insert country reports
    await this.prisma.countryEarnings.createMany({
      data: CountryReports,
    });

    // Return success message
    return 'Country reports inserted successfully!';
  }

  private createMonthlyReportData(monthlyReportDto: MonthlyReportsResponseDTO) {
    // Create monthly report data
    const MonthlyReports = [];

    for (const report of monthlyReportDto.data) {
      MonthlyReports.push({
        date: report.date,
        month: report.month,
        year: report.year,
        trackDownloads: report.trackDownloads,
        streams: report.streams,
        totalSales: report.totalSales,
        earnings: report.earnings,
        audioId: monthlyReportDto.audioId,
      });
    }

    return MonthlyReports;
  }

  private createStoreReportData(storeReportDto: StoresResponseDTO) {
    // Create store report data
    const StoreReports = [];

    for (const report of storeReportDto.data) {
      StoreReports.push({
        name: report.store,
        trackDownloads: report.trackDownloads,
        streams: report.streams,
        totalSales: report.totalSales,
        earnings: report.earnings,
        audioId: storeReportDto.audioId,
      });
    }

    return StoreReports;
  }

  private createCountryReportData(countryReportDto: CountriesResponseDTO) {
    // Create country report data
    const CountryReports = [];

    for (const report of countryReportDto.data) {
      CountryReports.push({
        name: report.country,
        trackDownloads: report.trackDownloads,
        streams: report.streams,
        totalSales: report.totalSales,
        earnings: report.earnings,
        audioId: countryReportDto.audioId,
      });
    }

    return CountryReports;
  }

  //---------------------------------- Fetch Logic for Sales Report  ----------------------

  async fetchMonthlyReports(userId: string) {
    // Fetch audio IDs for the user
    const audios = await this.fetchUserAudios(userId);
    const audioIds = audios.map((audio) => audio.id);
    if (audioIds.length === 0) return [];

    const monthlyReports = await this.fetchAudioMonthlyReports(audioIds);

    const aggregatedMonthlyReports = this.aggregateMonthlyData(monthlyReports);

    return aggregatedMonthlyReports;
  }

  async fetchStoreReports(userId: string) {
    // Fetch audio IDs for the user
    const audios = await this.fetchUserAudios(userId);
    const audioIds = audios.map((audio) => audio.id);
    if (audioIds.length === 0) return [];

    const storeReports = await this.fetchAudioStoreReports(audioIds);

    const aggregatedStoreReports = this.aggregateData(storeReports);

    return aggregatedStoreReports;
  }

  async fetchCountryReports(userId: string) {
    // Fetch audio IDs for the user
    const audios = await this.fetchUserAudios(userId);
    const audioIds = audios.map((audio) => audio.id);
    if (audioIds.length === 0) return [];

    const countryReports =
      await this.getCountryEarningsWithCountryIds(audioIds);

    const aggregateCountryReports = this.aggregateData(countryReports);

    return aggregateCountryReports;
  }

  async fetchReportByTrack(userId: string) {
    // Fetch audio IDs for the user
    const audios = await this.fetchUserAudios(userId);
    const audioIds = audios.map((audio) => audio.id);
    if (audioIds.length === 0) return [];

    const monthlyReports = await this.prisma.monthlyReport.findMany({
      where: { audioId: { in: audioIds } },
      select: {
        trackDownloads: true,
        streams: true,
        earnings: true,
        audio: {
          select: {
            title: true,
          },
        },
      },
    });

    const aggregatedReports = monthlyReports.reduce((acc, report) => {
      const title = report.audio.title;

      // Check if the title already exists in the accumulator
      if (!acc[title]) {
        // If not, create a new entry for this title
        acc[title] = {
          trackDownloads: 0,
          streams: 0,
          earnings: 0,
          title: title, // Include title for reference
        };
      }

      // Sum the values
      acc[title].trackDownloads += report.trackDownloads;
      acc[title].streams += report.streams;
      acc[title].earnings += report.earnings;

      return acc;
    }, {});

    // Step 3: Convert the accumulated object back into an array
    const result = Object.values(aggregatedReports);

    return result;
  }

  private async fetchUserAudios(userId: string) {
    return await this.prisma.audio.findMany({
      where: { userId },
      select: {
        id: true,
        title: true,
      },
    });
  }
  // Fetch streams for the specified audio IDs
  private async fetchAudioMonthlyReports(audioIds: string[]) {
    return await this.prisma.monthlyReport.findMany({
      where: { audioId: { in: audioIds } },
      select: {
        trackDownloads: true,
        streams: true,
        totalSales: true,
        earnings: true,
        date: true,
        year: true,
        month: true,
      },
    });
  }

  private async fetchAudioStoreReports(audioIds: string[]) {
    return await this.prisma.store.findMany({
      where: { audioId: { in: audioIds } },
      select: {
        name: true,
        trackDownloads: true,
        streams: true,
        totalSales: true,
        earnings: true,
      },
    });
  }

  private aggregateMonthlyData(data = []) {
    const aggregated: Record<string, AggregatedData> = {};

    data.forEach((item) => {
      const key = `${item.year}-${item.month}`; // Unique key based on year and month

      // Initialize if the key doesn't exist
      if (!aggregated[key]) {
        aggregated[key] = {
          trackDownloads: 0,
          streams: 0,
          totalSales: 0,
          earnings: 0,
          date: item.date, // Keep the original date for display purposes
          year: item.year,
          month: item.month,
        };
      }

      // Sum the values
      aggregated[key].trackDownloads += item.trackDownloads;
      aggregated[key].streams += item.streams;
      aggregated[key].totalSales += item.totalSales;
      aggregated[key].earnings += item.earnings;
    });

    // Convert the aggregated object back into an array
    return Object.values(aggregated);
  }

  private aggregateData(streams = []) {
    // Use reduce to sum up the values
    const sum = streams.reduce((acc, current) => {
      // Find the index of the current name in the accumulator
      const existingPlatform = acc.find((item) => item.name === current.name);

      if (existingPlatform) {
        // If found, sum the values
        existingPlatform.trackDownloads += current.trackDownloads;
        existingPlatform.streams += current.streams;
        existingPlatform.totalSales += current.totalSales;
        existingPlatform.earnings += current.earnings;
      } else {
        // If not found, add the current item to the accumulator
        acc.push({ ...current });
      }
      return acc;
    }, []);
    return sum;
  }

  // Fetch the country earnings and manually map the country ID from the Country table
  private async getCountryEarningsWithCountryIds(audioIds: string[]) {
    const earnings = await this.prisma.countryEarnings.findMany({
      where: { audioId: { in: audioIds } },
      select: {
        name: true,
        trackDownloads: true,
        streams: true,
        totalSales: true,
        earnings: true,
      },
    });

    // Check if there are no earnings to process
    if (earnings.length === 0) {
      return [];
    }

    // Step 2: Extract unique country names
    const countryNames = [...new Set(earnings.map((e) => e.name))];

    // Step 3: Fetch all country IDs in a single query
    const countryMap = await this.prisma.country.findMany({
      where: { name: { in: countryNames } },
      select: { isoCode: true, name: true },
    });

    // Step 4: Create a mapping from country name to country ID
    const countryIdMap = countryMap.reduce((map, country) => {
      map[country.name] = country.isoCode;
      return map;
    }, {});

    // Step 5: Merge earnings with country IDs
    const earningsWithCountryId = earnings.map((e) => ({
      ...e,
      id: countryIdMap[e.name] || null, // Assign countryId, default to null if not found
    }));

    return earningsWithCountryId;
  }
}
