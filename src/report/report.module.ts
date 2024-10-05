import { Module } from '@nestjs/common';
import { StoresReportController } from './sales/stores-report/stores-report.controller';
import { StoresReportService } from './sales/stores-report/stores-report.service';
import { MonthlySalesController } from './sales/monthly-sales/monthly-sales.controller';
import { MonthlySalesService } from './sales/monthly-sales/monthly-sales.service';
import { CountryReportController } from './sales/country-report/country-report.controller';
import { CountryReportService } from './sales/country-report/country-report.service';
import { PrismaService } from 'src/database/prisma.service';
import { StreamsController } from './streams/streams.controller';
import { CountryService } from './streams/services/country.service';
import { StreamsService } from './streams/services/streams.service';
import { CacheService } from 'src/cache/cache.service';
import { CacheModule } from 'src/cache/cache.module';

@Module({
  imports: [CacheModule],
  controllers: [
    StoresReportController,
    MonthlySalesController,
    CountryReportController,
    StreamsController,
  ],
  providers: [
    StoresReportService,
    PrismaService,
    MonthlySalesService,
    CountryReportService,
    CountryService,
    StreamsService,
    CacheService,
  ],
})
export class ReportsModule {}
