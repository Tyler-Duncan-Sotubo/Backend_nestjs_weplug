import { Module } from '@nestjs/common';
import { StoresReportController } from './stores-report.controller';
import { StoresReportService } from './stores-report.service';

@Module({
  controllers: [StoresReportController],
  providers: [StoresReportService]
})
export class StoresReportModule {}
