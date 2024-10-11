import { Module } from '@nestjs/common';
import { RevenueService } from './revenue.service';
import { RevenueController } from './revenue.controller';
import { PrismaService } from 'src/database/prisma.service';
import { CacheService } from 'src/cache/cache.service';
import { PaymentService } from './payment.service';
import { CacheModule } from 'src/cache/cache.module';

@Module({
  imports: [CacheModule],
  controllers: [RevenueController],
  providers: [RevenueService, PrismaService, CacheService, PaymentService],
})
export class RevenueModule {}
