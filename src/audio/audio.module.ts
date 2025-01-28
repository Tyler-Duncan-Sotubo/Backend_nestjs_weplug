import { Module } from '@nestjs/common';
import { ApiMusicController } from './music/music.controller';
import { MusicService } from './music/music.service';
import { TrackController } from './track/track.controller';
import { SalesReportController } from './sales-report/sales-report.controller';
import { ApiStreamsController } from './streams/streams.controller';
import {
  MonthlySalesService,
  CountryReportService,
  StoresReportService,
} from './sales-report/services';
import { AwsService } from 'config/aws/aws.service';
import { PrismaService } from 'database/prisma.service';
import { MusicReleaseService } from 'config/mail/musicRelease.service';
import { NotificationService } from 'config/mail/notification.service';
import { CacheService } from 'config/cache/cache.service';
import { CacheModule } from 'config/cache/cache.module';
import { TrackService } from './track/track.service';
import { CountryService, StreamsService } from './streams/services';

@Module({
  imports: [CacheModule],
  controllers: [
    ApiMusicController,
    TrackController,
    SalesReportController,
    ApiStreamsController,
  ],
  providers: [
    MusicService,
    MonthlySalesService,
    CountryReportService,
    StoresReportService,
    AwsService,
    PrismaService,
    MusicReleaseService,
    NotificationService,
    CacheService,
    TrackService,
    StreamsService,
    CountryService,
  ],
})
export class AudioModule {}
