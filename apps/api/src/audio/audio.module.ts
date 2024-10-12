import { Module } from '@nestjs/common';
import { ApiMusicController } from './music/api-music.controller';
import { ApiMusicService } from './music/api-music.service';
import { ApiTrackService } from './track/api-track.service';
import { ApiTrackController } from './track/api-track.controller';
import { ClientProxyFactory } from '@nestjs/microservices';
import { AUDIO_CLIENT } from './constant';
import { ClientConfigService } from '../client-config/client-config.service';
import { ClientConfigModule } from '../client-config/client-config.module';
import { ApiSalesReportController } from './sales-report/api-sales-report.controller';
import { ApiSalesReportService } from './sales-report/api-sales-report.service';
import { ApiStreamsController } from './streams/api-streams.controller';
import { ApiStreamsService } from './streams/api-streams.service';

@Module({
  imports: [ClientConfigModule],
  controllers: [
    ApiMusicController,
    ApiTrackController,
    ApiSalesReportController,
    ApiStreamsController,
  ],
  providers: [
    ApiMusicService,
    ApiTrackService,
    ApiSalesReportService,
    ApiStreamsService,
    {
      provide: AUDIO_CLIENT,
      useFactory: (configService: ClientConfigService) => {
        const clientOptions = configService.getAudioClientOptions();
        return ClientProxyFactory.create(clientOptions);
      },
      inject: [ClientConfigService],
    },
  ],
})
export class AudioModule {}
