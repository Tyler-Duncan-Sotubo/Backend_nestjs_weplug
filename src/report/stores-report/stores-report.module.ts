import { Module } from '@nestjs/common';
import { StoresReportController } from './stores-report.controller';
import { StoresReportService } from './stores-report.service';
import { PrismaService } from 'src/database/prisma.service';

@Module({
  controllers: [StoresReportController],
  providers: [StoresReportService, PrismaService],
})
export class StoresReportModule {}
