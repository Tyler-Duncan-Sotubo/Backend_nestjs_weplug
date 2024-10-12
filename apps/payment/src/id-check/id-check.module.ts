import { Module } from '@nestjs/common';
import { IdCheckController } from './id-check.controller';
import { IdCheckService } from './id-check.service';
import { PaymentPrismaService } from '../../database/prisma.service';
import { AwsService } from '@app/common/aws/aws.service';
import { IdentityService } from '@app/common/mail/identity.service';
import { CacheService } from '@app/common/cache/cache.service';
import { CacheModule } from '@app/common/cache/cache.module';

@Module({
  imports: [CacheModule],
  controllers: [IdCheckController],
  providers: [
    IdCheckService,
    PaymentPrismaService,
    AwsService,
    IdentityService,
    CacheService,
  ],
})
export class IdCheckModule {}
