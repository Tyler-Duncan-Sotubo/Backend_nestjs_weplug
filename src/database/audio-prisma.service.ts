import { Injectable } from '@nestjs/common';
import { PrismaClient as AudioPrismaClient } from '@prisma/audio/client';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AudioPrismaService extends AudioPrismaClient {
  constructor(config: ConfigService) {
    super({
      datasources: {
        db: {
          url: config.get('DATABASE_URL'),
        },
      },
    });
  }
}
