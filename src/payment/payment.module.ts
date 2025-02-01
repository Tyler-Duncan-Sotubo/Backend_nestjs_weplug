import { Module } from '@nestjs/common';
import { PaymentController } from './payment.controller';
import { PaymentService } from './payment.service';
import { PrismaService } from 'database/prisma.service';
import { AwsService } from 'config/aws/aws.service';
import { IdentityService } from 'config/mail/identity.service';
import { CacheService } from 'config/cache/cache.service';
import { CacheModule } from 'config/cache/cache.module';
import { MonthlySalesService } from 'src/audio/sales-report/services';

@Module({
  imports: [CacheModule],
  controllers: [PaymentController],
  providers: [
    PaymentService,
    PrismaService,
    AwsService,
    IdentityService,
    CacheService,
    MonthlySalesService,
  ],
})
export class PaymentModule {}
