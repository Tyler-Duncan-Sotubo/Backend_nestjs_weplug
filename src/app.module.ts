import { Module } from '@nestjs/common';
import { MusicModule } from './music/music.module';
import { AwsService } from './aws/aws.service';
import { MailModule } from './mail/mail.module';
import { PrismaModule } from './prisma/prisma.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    MusicModule,
    MailModule,
    PrismaModule,
  ],
  providers: [AwsService],
})
export class AppModule {}
