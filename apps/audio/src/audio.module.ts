import { Module } from '@nestjs/common';
import { MusicModule } from './music/music.module';
import { ReportModule } from './report/report.module';
import { ConfigModule } from '@nestjs/config';
import { CacheModule } from 'libs/common/src/cache/cache.module';
import { MailModule } from '@app/common/mail/mail.module';

@Module({
  imports: [
    MusicModule,
    ReportModule,
    CacheModule,
    MailModule,
    ConfigModule.forRoot({
      isGlobal: true,
    }),
  ],
  controllers: [],
  providers: [],
})
export class AudioModule {}
