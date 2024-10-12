import { Module } from '@nestjs/common';
import { PrismaService } from '../../database/prisma.service';
import { StreamsController } from './streams/streams.controller';
import { CountryService } from './streams/services/country.service';
import { StreamsService } from './streams/services/streams.service';
import { CacheService } from 'libs/common/src/cache/cache.service';
import { CacheModule } from 'libs/common/src/cache/cache.module';
import { CountryReportService } from './sales/services/country-report.service';
import { StoresReportService } from './sales/services/stores-report.service';
import { MonthlySalesService } from './sales/services/monthly-sales.service';
import { SalesReportController } from './sales/sales-report.controller';
import { AudioReportService } from './sales/services/audio-report.service';

@Module({
  imports: [CacheModule],
  controllers: [StreamsController, SalesReportController],
  providers: [
    PrismaService,
    CountryService,
    StreamsService,
    CacheService,
    CountryReportService,
    StoresReportService,
    MonthlySalesService,
    AudioReportService,
  ],
})
export class ReportsModule {}
