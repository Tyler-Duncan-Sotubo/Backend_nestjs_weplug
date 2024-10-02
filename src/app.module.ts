import { Module } from '@nestjs/common';
import { MusicModule } from './music/music.module';
import { AwsService } from './aws/aws.service';
import { MailModule } from './mail/mail.module';
import { PrismaModule } from './prisma/prisma.module';
import { ConfigModule } from '@nestjs/config';
import { StreamsModule } from './streams/streams.module';
import { SalesReportModule } from './sales-report/sales-report.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    MusicModule,
    MailModule,
    PrismaModule,
    StreamsModule,
    SalesReportModule,
  ],
  providers: [AwsService],
})
export class AppModule {}
