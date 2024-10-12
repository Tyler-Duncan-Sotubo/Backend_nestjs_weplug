import { Injectable } from '@nestjs/common';
import { PrismaClient as PaymentPrismaClient } from '../prisma/generated/payment-client';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class PaymentPrismaService extends PaymentPrismaClient {
  constructor(config: ConfigService) {
    super({
      datasources: {
        db: {
          url: config.get('DATABASE_URL_PAYMENT'),
        },
      },
    });
  }
}
