import { Module } from '@nestjs/common';
import { StoresReportController } from './stores-report.controller';
import { StoresReportService } from './stores-report.service';
import { AudioPrismaService } from 'src/database/audio-prisma.service';

@Module({
  controllers: [StoresReportController],
  providers: [StoresReportService, AudioPrismaService],
})
export class StoresReportModule {}
