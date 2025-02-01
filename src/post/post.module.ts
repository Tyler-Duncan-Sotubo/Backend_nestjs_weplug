import { Module } from '@nestjs/common';
import { PostService } from './post.service';
import { PostController } from './post.controller';
import { PrismaService } from 'database/prisma.service';
import { CacheModule } from 'config/cache/cache.module';
import { CacheService } from 'config/cache/cache.service';

@Module({
  imports: [CacheModule],
  controllers: [PostController],
  providers: [PostService, PrismaService, CacheService],
})
export class PostModule {}
