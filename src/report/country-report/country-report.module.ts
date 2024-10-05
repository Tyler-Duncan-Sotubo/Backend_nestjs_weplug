import { Module } from '@nestjs/common';
import { CountryReportController } from './country-report.controller';
import { CountryReportService } from './country-report.service';
import { PrismaService } from 'src/database/prisma.service';

@Module({
  controllers: [CountryReportController],
  providers: [CountryReportService, PrismaService],
})
export class CountryReportModule {}
