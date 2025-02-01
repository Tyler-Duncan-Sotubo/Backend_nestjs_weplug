import { Injectable } from '@nestjs/common';
import { StoresResponseDTO } from 'src/audio/dto/report';
import { PrismaService } from '../../../../database/prisma.service';
import { ReportType } from '../types/report.type';
import { Store } from '@prisma/client';

@Injectable()
export class StoresReportService {
  constructor(private readonly prisma: PrismaService) {}
  // Method to find an existing report based on 'name'
  async findExistingReport(audioId: string, name: string) {
    return await this.prisma.store.findFirst({
      where: {
        audioId: audioId,
        name: name,
      },
    });
  }

  // Method to update an existing report if needed
  async updateReportIfNeeded(existingReport: Store, report: ReportType) {
    const needsUpdate =
      existingReport.earnings !== report.earnings ||
      existingReport.streams !== report.streams ||
      existingReport.trackDownloads !== report.trackDownloads ||
      existingReport.totalSales !== report.totalSales;

    if (needsUpdate) {
      const updatedReport = await this.prisma.store.update({
        where: { id: existingReport.id },
        data: {
          streams: report.streams,
          trackDownloads: report.trackDownloads,
          totalSales: report.totalSales,
          earnings: report.earnings,
        },
      });
      return `Updated report for:  ${updatedReport.name}`;
    }
    return `No changes detected for report:  ${report.store}`;
  }

  // Method to create a new report
  async createNewReport(audioId: string, report: ReportType) {
    const newReport = await this.prisma.store.create({
      data: {
        name: report.store,
        streams: report.streams,
        trackDownloads: report.trackDownloads,
        totalSales: report.totalSales,
        earnings: report.earnings,
        audioId: audioId,
      },
    });
    console.log(`Created new report for ${report.store}`);
    return newReport;
  }

  // Main function to process the reports
  async createReportByStore(storeReportDto: StoresResponseDTO) {
    const processedReports = [];

    for (const report of storeReportDto.data) {
      // Step 1: Check if the report exists based on 'name'
      const existingReport = await this.findExistingReport(
        storeReportDto.audioId,
        report.store,
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
          storeReportDto.audioId,
          report,
        );
        processedReports.push(newReport); // Add the new report to the array
      }
    }

    // Return all processed reports
    return processedReports;
  }

  // ---------------------------------- Fetch Logic for Sales Report  ----------------------

  async fetchStoreReports(userId: string) {
    // Fetch audio IDs for the user
    const audios = await this.fetchUserAudios(userId);
    const audioIds = audios.map((audio) => audio.id);
    if (audioIds.length === 0) return [];

    const storeReports = await this.fetchAudioStoreReports(audioIds);

    const aggregatedStoreReports = this.aggregateData(storeReports);

    return aggregatedStoreReports;
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

  private async fetchAudioStoreReports(audioIds: string[]) {
    return await this.prisma.salesByStore.findMany({
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
}
