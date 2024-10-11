// src/cache/cache.service.ts
import { CACHE_MANAGER } from '@nestjs/cache-manager';
import { Injectable, Inject } from '@nestjs/common';
import { Cache } from 'cache-manager';

@Injectable()
export class CacheService {
  constructor(@Inject(CACHE_MANAGER) private cacheManager: Cache) {}

  /**
   * Get data from Redis cache.
   * @param key The key to retrieve the cached data.
   */
  async get(key: string): Promise<any> {
    return this.cacheManager.get(key);
  }

  /**
   * Set data in Redis cache.
   * @param key The key under which to store the data.
   * @param value The data to store in the cache.
   * @param ttl Time-to-live in seconds (optional).
   */
  async set(key: string, value: any, options?: { ttl: number }): Promise<void> {
    await this.cacheManager.set(key, value, options?.ttl);
  }

  /**
   * Remove data from Redis cache.
   * @param key The key to delete from the cache.
   */
  async del(key: string): Promise<void> {
    await this.cacheManager.del(key);
  }

  /**
   * Reset the entire cache.
   */
  async reset(): Promise<void> {
    await this.cacheManager.reset();
  }
}
