import { Module } from '@nestjs/common';
import { CountryReportController } from './country-report.controller';
import { CountryReportService } from './country-report.service';
import { AudioPrismaService } from 'src/database/audio-prisma.service';

@Module({
  controllers: [CountryReportController],
  providers: [CountryReportService, AudioPrismaService],
})
export class CountryReportModule {}
