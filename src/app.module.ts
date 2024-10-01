import { Module } from '@nestjs/common';
import { MusicModule } from './music/music.module';
import { AwsService } from './aws/aws.service';
import { MailModule } from './mail/mail.module';
import { PrismaModule } from './prisma/prisma.module';
import { ConfigModule } from '@nestjs/config';
import { StreamsModule } from './streams/streams.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    MusicModule,
    MailModule,
    PrismaModule,
    StreamsModule,
  ],
  providers: [AwsService],
})
export class AppModule {}
