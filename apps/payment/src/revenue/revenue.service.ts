import { Injectable } from '@nestjs/common';
import { CacheService } from '@app/common/cache/cache.service';

@Injectable()
export class RevenueService {
  constructor(
    private readonly cacheService: CacheService, // Inject cache service for caching logic
  ) {}

  async accumulateEarningsForUser(userId: string) {
    // Cache key for monthly reports from Audio service
    const cacheKey = `monthly-report-${userId}`;
    // Fetch monthly reports from cache
    const months = await this.cacheService.get(cacheKey);
    const monthlyReports = JSON.parse(months);

    // Cache keys for total earnings and monthly reports
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
