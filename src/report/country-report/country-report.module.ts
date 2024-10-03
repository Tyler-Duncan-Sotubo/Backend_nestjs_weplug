import { Module } from '@nestjs/common';
import { CountryReportController } from './country-report.controller';
import { CountryReportService } from './country-report.service';

@Module({
  controllers: [CountryReportController],
  providers: [CountryReportService],
})
export class CountryReportModule {}
