import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../../../database/prisma.service';

@Injectable()
export class AudioReportService {
  constructor(private readonly prisma: PrismaService) {}

  // Fetch the user's audio reports
  async fetchUserAudioReports(userId: string) {
    const audios = await this.fetchUserAudios(userId);
    const audioIds = audios.map((audio) => audio.id);

    if (audioIds.length === 0) {
      return { message: 'No audio files found for this user.' };
    }

    // Fetch and return the monthly reports
    return await this.fetchAudioMonthlyReports(audioIds);
  }

  private async fetchUserAudios(userId: string) {
    return await this.prisma.audio.findMany({
      where: { userId },
      select: { id: true },
    });
  }

  private async fetchAudioMonthlyReports(audioIds: string[]) {
    return await this.prisma.monthlyReport.findMany({
      where: { audioId: { in: audioIds } },
      select: {
        month: true,
        year: true,
        earnings: true,
        audioId: true,
      },
    });
  }
}
