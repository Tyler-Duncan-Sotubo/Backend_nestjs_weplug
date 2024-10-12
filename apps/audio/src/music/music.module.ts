import { Module } from '@nestjs/common';
import { MusicService } from './music.service';
import { MusicController } from './music.controller';
import { AwsService } from 'libs/common/src/aws/aws.service';
import { PrismaService } from '../../database/prisma.service';
import { CacheService } from 'libs/common/src/cache/cache.service';
import { CacheModule } from 'libs/common/src/cache/cache.module';

@Module({
  imports: [CacheModule],
  controllers: [MusicController],
  providers: [MusicService, AwsService, PrismaService, CacheService],
})
export class MusicModule {}
