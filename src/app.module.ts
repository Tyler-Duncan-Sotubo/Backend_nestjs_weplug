import { Module } from '@nestjs/common';
import { MusicModule } from './music/music.module';
import { AwsService } from './libs/aws/aws.service';
import { MailModule } from './libs/mail/mail.module';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from './database/database.module';
import { IdCheckModule } from './id-check/id-check.module';
import { ReportsModule } from './report/report.module';
import { RevenueModule } from './revenue/revenue.module';
import { CacheModule } from './cache/cache.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    DatabaseModule,
    MusicModule,
    MailModule,
    ReportsModule,
    IdCheckModule,
    RevenueModule,
    CacheModule,
  ],
  providers: [AwsService],
})
export class AppModule {}
