import { Injectable } from '@nestjs/common';
import { PrismaClient as AudioPrismaClient } from '../generated/audio-client';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class PrismaService extends AudioPrismaClient {
  constructor(config: ConfigService) {
    super({
      datasources: {
        db: {
          url: config.get('DATABASE_URL_AUDIO'),
        },
      },
    });
  }
}
