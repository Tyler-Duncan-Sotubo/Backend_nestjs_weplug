import { Injectable } from '@nestjs/common';
import { CountriesResponseDTO } from '@app/common/report';
import { CountryEarnings } from 'apps/audio/prisma/generated/audio-client';
import { CountryReport } from '../types/report-country-types';
import { PrismaService } from '../../../../database/prisma.service';
import { CacheService } from '@app/common/cache/cache.service';

@Injectable()
export class CountryReportService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly cacheService: CacheService,
  ) {}

  async findExistingReport(audioId: string, name: string) {
    return await this.prisma.countryEarnings.findFirst({
      where: {
        audioId: audioId,
        name: name,
      },
    });
  }

  async updateReportIfNeeded(
    existingReport: CountryEarnings,
    report: CountryReport,
  ) {
    const needsUpdate =
      existingReport.earnings !== report.earnings ||
      existingReport.streams !== report.streams ||
      existingReport.trackDownloads !== report.trackDownloads ||
      existingReport.totalSales !== report.totalSales;

    if (needsUpdate) {
      const updatedReport = await this.prisma.countryEarnings.update({
        where: { id: existingReport.id },
        data: {
          streams: report.streams,
          trackDownloads: report.trackDownloads,
          totalSales: report.totalSales,
          earnings: report.earnings,
        },
      });
      return `Updated report for: ${updatedReport.name}`;
    }
    return `No changes detected for report: ${report.country}`;
  }

  // Method to create a new report
  async createNewReport(audioId: string, report: CountryReport) {
    const newReport = await this.prisma.countryEarnings.create({
      data: {
        name: report.country,
        streams: report.streams,
        trackDownloads: report.trackDownloads,
        totalSales: report.totalSales,
        earnings: report.earnings,
        audioId: audioId,
      },
    });
    return newReport;
  }

  async createReportByCountry(countryReportDto: CountriesResponseDTO) {
    const processedReports = [];

    for (const report of countryReportDto.data) {
      // Step 1: Check if the report exists based on 'name'
      const existingReport = await this.findExistingReport(
        countryReportDto.audioId,
        report.country,
      );

      if (existingReport) {
        // Step 2: If exists, check if update is needed
        const updatedReport = await this.updateReportIfNeeded(
          existingReport,
          report,
        );
        if (updatedReport) {
          processedReports.push(updatedReport); // Add the updated report to the array
        }
      } else {
        // Step 3: If not exists, create a new report
        const newReport = await this.createNewReport(
          countryReportDto.audioId,
          report,
        );
        processedReports.push(newReport); // Add the new report to the array
      }
    }

    // Return all processed reports
    return processedReports;
  }

  // Method to fetch country reports for a user
  async fetchCountryReports(userId: string) {
    // Cache Key for country reports
    const cacheKey = `country-report-${userId}`;

    // fetch reports from cache
    const cachedReports = await this.cacheService.get(cacheKey);
    if (cachedReports) {
      return JSON.parse(cachedReports);
    }

    // Fetch audio IDs for the user
    const audios = await this.fetchUserAudios(userId);
    const audioIds = audios.map((audio) => audio.id);
    if (audioIds.length === 0) return [];

    const countryReports =
      await this.getCountryEarningsWithCountryIds(audioIds);

    const aggregateCountryReports = this.aggregateData(countryReports);

    // Cache the fetched data
    await this.cacheService.set(
      cacheKey,
      JSON.stringify(aggregateCountryReports),
    );

    return aggregateCountryReports;
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
