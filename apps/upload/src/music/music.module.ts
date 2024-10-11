import { Module } from '@nestjs/common';
import { MusicController } from './music.controller';
import { MusicService } from './music.service';
import { AwsService } from 'src/libs/aws/aws.service';
import { PrismaService } from 'src/database/prisma.service';
import { CacheService } from 'src/cache/cache.service';
import { CacheModule } from 'src/cache/cache.module';
import { TrackController } from './track/track.controller';
import { TrackService } from './track/track.service';

@Module({
  imports: [CacheModule],
  controllers: [MusicController, TrackController],
  providers: [
    MusicService,
    AwsService,
    PrismaService,
    CacheService,
    TrackService,
  ],
})
export class MusicModule {}
