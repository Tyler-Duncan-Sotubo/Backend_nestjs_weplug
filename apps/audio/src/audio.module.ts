import { Module } from '@nestjs/common';
import { MusicModule } from './music/music.module';
import { ConfigModule } from '@nestjs/config';
import { CacheModule } from 'libs/common/src/cache/cache.module';
import { MailModule } from '@app/common/mail/mail.module';
import { TrackModule } from './track/track.module';
import { ReportsModule } from './report/report.module';

@Module({
  imports: [
    MusicModule,
    CacheModule,
    MailModule,
    TrackModule,
    ReportsModule,
    ConfigModule.forRoot({
      isGlobal: true,
    }),
  ],
  controllers: [],
  providers: [],
})
export class AudioModule {}
