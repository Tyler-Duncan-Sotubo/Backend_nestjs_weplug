import { Module } from '@nestjs/common';
import { AudioPrismaService } from './audio-prisma.service';
import { PaymentPrismaService } from './payment-prisma.service';

@Module({
  providers: [AudioPrismaService, PaymentPrismaService],
  exports: [AudioPrismaService, PaymentPrismaService],
})
export class DatabaseModule {}
