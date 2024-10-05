import { Module } from '@nestjs/common';
import { MusicController } from './music.controller';
import { MusicService } from './music.service';
import { AwsService } from 'src/aws/aws.service';
import { PrismaService } from 'src/database/prisma.service';

@Module({
  controllers: [MusicController],
  providers: [MusicService, AwsService, PrismaService],
})
export class MusicModule {}
