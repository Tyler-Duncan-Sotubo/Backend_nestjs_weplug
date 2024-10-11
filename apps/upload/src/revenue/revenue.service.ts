import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { CacheService } from 'src/cache/cache.service';
import { PaymentService } from './payment.service';

interface EarningsReport {
  month: number;
  year: number;
  totalEarnings: number;
}

@Injectable()
export class RevenueService {
  constructor(
    private prisma: PrismaService,
    private cacheService: CacheService,
    private payment: PaymentService,
  ) {}

  /**
   * Accumulates earnings from MonthlyReport for a specific user until the total reaches or exceeds £50.
   * @param userId The ID of the user.
   */
  async accumulateEarningsForUser(userId: string) {
    const cacheKeyTotalEarnings = `user:${userId}:totalEarnings`;
    const cacheKeyMonthlyReports = `user:${userId}:monthlyReports`;

    // Check if cached data exists for both total earnings and monthly reports
    const cachedEarnings = await this.cacheService.get(cacheKeyTotalEarnings);
    const cachedMonthlyReports = await this.cacheService.get(
      cacheKeyMonthlyReports,
    );

    // Check if cached data exists
    if (cachedEarnings && cachedMonthlyReports) {
      const totalEarnings = JSON.parse(cachedEarnings);
      const aggregatedMonthlyReports = JSON.parse(cachedMonthlyReports);
      return {
        message: 'Returning cached earnings and monthly reports.',
        earnings: totalEarnings,
        monthlyReports: aggregatedMonthlyReports,
      };
    }

    // Fetch the user's audio files (fetchUserAudios logic moved here)
    const audios = await this.fetchUserAudios(userId);
    const audioIds = audios.map((audio) => audio.id);

    if (audioIds.length === 0) {
      return { message: 'No audio files found for this user.', earnings: 0 };
    }

    // Fetch and aggregate the user's monthly reports (fetchAudioMonthlyReports + aggregation)
    const monthlyReports = await this.fetchAudioMonthlyReports(audioIds);
    const aggregatedMonthlyReports = this.aggregateMonthlyData(monthlyReports);

    // Calculate total accumulated earnings
    const totalEarnings = aggregatedMonthlyReports.reduce(
      (sum: number, report: EarningsReport) => sum + report.totalEarnings,
      0,
    );

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

  /**
   * Helper function to fetch all audios for a user.
   * @param userId The ID of the user.
   */
  private async fetchUserAudios(userId: string) {
    return await this.prisma.audio.findMany({
      where: { userId },
      select: { id: true }, // Only select necessary fields
    });
  }

  /**
   * Helper function to fetch monthly reports for given audio IDs.
   * @param audioIds List of audio IDs.
   */
  private async fetchAudioMonthlyReports(audioIds: string[]) {
    return await this.prisma.monthlyReport.findMany({
      where: { audioId: { in: audioIds } },
      select: {
        month: true,
        year: true,
        earnings: true,
      },
    });
  }

  /**
   * Helper function to aggregate monthly report data.
   * @param monthlyReports List of monthly reports to aggregate.
   */
  private aggregateMonthlyData(monthlyReports: any[]) {
    // Group and sum earnings by month/year
    const aggregatedReports = monthlyReports.reduce((acc, report) => {
      const key = `${report.year}-${report.month}`;
      if (!acc[key]) {
        acc[key] = { month: report.month, year: report.year, totalEarnings: 0 };
      }
      acc[key].totalEarnings += report.earnings;
      return acc;
    }, {});

    return Object.values(aggregatedReports);
  }

  /**
   * Allows the user to request a withdrawal if accumulated earnings are ≥ £50.
   * @param userId The ID of the user requesting the withdrawal.
   */
  //   async requestWithdrawal(userId: string) {
  // Fetch accumulated unpaid earnings
  // const totalRevenue = await this.prisma.revenue.findMany({
  //   where: { userId: userId, paid: false },
  //   select: { totalEarnings: true },
  // });

  // const accumulatedEarnings = totalRevenue.reduce(
  //   (sum, revenue) => sum + revenue.totalEarnings,
  //   0,
  // );

  // if (accumulatedEarnings < 50) {
  //   return {
  //     message: 'Insufficient earnings for withdrawal.',
  //     accumulatedEarnings,
  //   };
  // }

  // Process the payment
  // const paymentSuccess = await this.payment(accumulatedEarnings);

  // if (!paymentSuccess) {
  //   throw new Error('Payment failed. Please try again later.');
  // }

  // Mark the earnings as paid
  // await this.prisma.revenue.updateMany({
  //   where: { userId: userId, paid: false },
  //   data: { paid: true },
  // });

  //     return {
  //       message: 'Withdrawal successful',
  //       totalWithdrawn: accumulatedEarnings,
  //     };
  //   }
}
