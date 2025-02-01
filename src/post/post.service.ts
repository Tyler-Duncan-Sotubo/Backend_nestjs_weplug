import { Injectable } from '@nestjs/common';
import { CacheService } from 'config/cache/cache.service';
import { PrismaService } from 'database/prisma.service';

@Injectable()
export class PostService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly cache: CacheService,
  ) {}

  async getAllPosts() {
    const cacheKey = 'blog-posts';
    return this.cache.getOrSetCache(cacheKey, async () => {
      return this.prisma.blog.findMany({
        orderBy: {
          publishedAt: 'desc',
        },
      });
    });
  }

  async getPost(postId: string) {
    const cacheKey = `blog-post-${postId}`;
    return this.cache.getOrSetCache(cacheKey, async () => {
      return this.prisma.blog.findUnique({
        where: {
          id: postId,
        },
      });
    });
  }
}
