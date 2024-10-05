import { Module } from '@nestjs/common';
import { MusicController } from './music.controller';
import { MusicService } from './music.service';
import { AwsService } from 'src/aws/aws.service';
import { AudioPrismaService } from 'src/database/audio-prisma.service';

@Module({
  controllers: [MusicController],
  providers: [MusicService, AwsService, AudioPrismaService],
})
export class MusicModule {}
