import { Injectable, Logger } from '@nestjs/common';
import { HttpService } from '@nestjs/axios'; // Correct import
import { firstValueFrom } from 'rxjs'; // To convert Observable to Promise
import { CacheService } from '@app/common/cache/cache.service';
import { ConfigService } from '@nestjs/config'; // Adjust import based on your project structure

@Injectable()
export class RevenueService {
  constructor(
    private readonly httpService: HttpService,
    private readonly cacheService: CacheService, // Inject cache service for caching logic
    private readonly configService: ConfigService, // Inject ConfigService for environment variables
  ) {}

  async accumulateEarningsForUser(userId: string) {
    const cacheKeyTotalEarnings = `user:${userId}:totalEarnings`;
    const cacheKeyMonthlyReports = `user:${userId}:monthlyReports`;

    // Check if cached data exists for both total earnings and monthly reports
    const cachedEarnings = await this.cacheService.get(cacheKeyTotalEarnings);
    const cachedMonthlyReports = await this.cacheService.get(
      cacheKeyMonthlyReports,
    );

    // If cached data exists, return it
    if (cachedEarnings && cachedMonthlyReports) {
      const totalEarnings = JSON.parse(cachedEarnings);
      const aggregatedMonthlyReports = JSON.parse(cachedMonthlyReports);
      return {
        message: 'Returning cached earnings and monthly reports.',
        earnings: totalEarnings,
        monthlyReports: aggregatedMonthlyReports,
      };
    }

    // Fetch audio reports from the Audio Service
    const monthlyReports = await this.getAudioReportsFromAudioService(userId);
    if (!monthlyReports || monthlyReports.length === 0) {
      return { message: 'No audio reports found for this user.', earnings: 0 };
    }

    // Process and aggregate the user's monthly reports
    const aggregatedMonthlyReports = await this.processAudioReports(
      userId,
      monthlyReports,
    );

    // Calculate total accumulated earnings
    const totalEarnings = (await aggregatedMonthlyReports).reduce(
      (sum: number, report: any) => sum + report.earnings,
      0,
    );

    // Cache the results
    await this.cacheService.set(
      cacheKeyTotalEarnings,
      JSON.stringify(totalEarnings),
    );
    await this.cacheService.set(
      cacheKeyMonthlyReports,
      JSON.stringify(aggregatedMonthlyReports),
    );

    return {
      message: 'Earnings accumulated successfully.',
      earnings: totalEarnings,
      monthlyReports: aggregatedMonthlyReports,
    };
  }

  async getAudioReportsFromAudioService(userId: string) {
    const baseUrl = this.configService.get<string>('SERVER_URL');
    const audioServiceUrl = `${baseUrl}/api/sales-report/audio/${userId}`; // API Gateway URL
    try {
      const response = await firstValueFrom(
        this.httpService.get(audioServiceUrl),
      );
      return response.data; // This contains the monthly reports from the Audio Service
    } catch (error) {
      Logger.error(
        `Error fetching audio reports for user ${userId}: ${error.message}`,
      );
      throw new Error('Failed to fetch audio reports.');
    }
  }

  async processAudioReports(userId: string, monthlyReports: any[]) {
    const aggregatedMonthlyReports = this.aggregateMonthlyData(monthlyReports);
    return aggregatedMonthlyReports;
  }

  private aggregateMonthlyData(monthlyReports: any[]) {
    return monthlyReports.map((report) => ({
      month: report.month,
      year: report.year,
      earnings: report.earnings,
    }));
  }
}
