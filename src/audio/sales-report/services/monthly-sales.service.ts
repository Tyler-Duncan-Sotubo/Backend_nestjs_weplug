import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../../../database/prisma.service';
import { MonthlyReportsResponseDTO } from 'src/audio/dto/report';
import { CacheService } from 'config/cache/cache.service';

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
export class MonthlySalesService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly cacheService: CacheService,
  ) {}

  // Function to find an existing report by audioId and date
  private async findExistingReport(audioId: string, date: string) {
    return await this.prisma.monthlyReport.findFirst({
      where: {
        audioId: audioId,
        date: date,
      },
    });
  }

  // Function to update an existing report if necessary
  private async updateReportIfNeeded(existingReport, report) {
    const needsUpdate =
      existingReport.earnings !== report.earnings ||
      existingReport.streams !== report.streams ||
      existingReport.trackDownloads !== report.trackDownloads ||
      existingReport.totalSales !== report.totalSales;

    if (needsUpdate) {
      const updatedReport = await this.prisma.monthlyReport.update({
        where: { id: existingReport.id },
        data: {
          streams: report.streams,
          trackDownloads: report.trackDownloads,
          totalSales: report.totalSales,
          earnings: report.earnings,
        },
      });
      return 'Updated Report: ' + updatedReport.id;
    }
    return 'No changes detected for report: ' + existingReport.id;
  }

  // Function to create a new report
  private async createNewReport(
    monthlyReportDto: MonthlyReportsResponseDTO,
    report: any,
  ) {
    const newReport = await this.prisma.monthlyReport.create({
      data: {
        date: report.date,
        month: report.month,
        year: report.year,
        trackDownloads: report.trackDownloads,
        streams: report.streams,
        totalSales: report.totalSales,
        earnings: report.earnings,
        audioId: monthlyReportDto.audioId,
      },
    });
    return newReport;
  }

  // Create monthly reports
  async createMonthlyReport(monthlyReportDto: MonthlyReportsResponseDTO) {
    const MonthlyReports = [];

    for (const report of monthlyReportDto.data) {
      const existingReport = await this.findExistingReport(
        monthlyReportDto.audioId,
        report.date,
      );

      if (existingReport) {
        // Update if needed
        const updatedReport = await this.updateReportIfNeeded(
          existingReport,
          report,
        );
        if (updatedReport) MonthlyReports.push(updatedReport); // Add to the list if updated
      } else {
        // Create new report if not found
        const newReport = await this.createNewReport(monthlyReportDto, report);
        MonthlyReports.push(newReport); // Add the new report to the list
      }
    }

    return MonthlyReports; // Return the modified or newly created reports
  }

  // -------------------------------------  // Fetch  Logic for Monthly Sales Report  ----------------------

  async fetchMonthlyReports(userId: string) {
    const cacheKey = `monthly-report-${userId}`;

    // Check if the report already exists in the cache
    const cachedData = await this.cacheService.get(cacheKey);

    if (cachedData) {
      // If the report exists, return the cached data
      return JSON.parse(cachedData);
    }

    // Fetch audio IDs for the user
    const audios = await this.fetchUserAudios(userId);
    const audioIds = audios.map((audio) => audio.id);
    if (audioIds.length === 0) return [];

    const monthlyReports = await this.fetchAudioMonthlyReports(audioIds);

    const aggregatedMonthlyReports = this.aggregateMonthlyData(monthlyReports);

    // Store the aggregated data in the cache
    await this.cacheService.set(
      cacheKey,
      JSON.stringify(aggregatedMonthlyReports),
    );

    return aggregatedMonthlyReports;
  }

  // Fetch streams for the specified audio IDs
  private async fetchAudioMonthlyReports(audioIds: string[]) {
    return await this.prisma.salesByMonth.findMany({
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

  async fetchReportByTrack(userId: string) {
    // Fetch audio IDs for the user
    const audios = await this.fetchUserAudios(userId);
    const audioIds = audios.map((audio) => audio.id);
    if (audioIds.length === 0) return [];

    const monthlyReports = await this.prisma.salesByMonth.findMany({
      where: { audioId: { in: audioIds } },
      select: {
        trackDownloads: true,
        streams: true,
        earnings: true,
        Audio: {
          select: {
            title: true,
          },
        },
      },
    });

    const aggregatedReports = monthlyReports.reduce((acc, report) => {
      const title = report.Audio.title;

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

  private async fetchUserAudios(userId: string) {
    return await this.prisma.audio.findMany({
      where: { userId },
      select: {
        id: true,
        title: true,
      },
    });
  }
}
