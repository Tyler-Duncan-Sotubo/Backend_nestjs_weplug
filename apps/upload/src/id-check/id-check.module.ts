import { Module } from '@nestjs/common';
import { IdCheckService } from './id-check.service';
import { IdCheckController } from './id-check.controller';
import { PrismaService } from 'src/database/prisma.service';
import { AwsService } from 'src/libs/aws/aws.service';
import { CacheService } from 'src/cache/cache.service';
import { CacheModule } from 'src/cache/cache.module';

@Module({
  imports: [CacheModule],
  controllers: [IdCheckController],
  providers: [IdCheckService, PrismaService, AwsService, CacheService],
})
export class IdCheckModule {}
