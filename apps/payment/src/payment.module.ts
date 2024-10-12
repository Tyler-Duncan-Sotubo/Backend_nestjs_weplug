import { Module } from '@nestjs/common';
import { RevenueService } from './revenue/revenue.service';
import { RevenueController } from './revenue/revenue.controller';
import { CacheModule } from '@app/common/cache/cache.module';
import { HttpModule } from '@nestjs/axios'; // Import HttpModule from @nestjs/axios
import { ConfigModule } from '@nestjs/config';
import { IdCheckModule } from './id-check/id-check.module';

@Module({
  imports: [
    CacheModule,
    HttpModule,
    IdCheckModule,
    ConfigModule.forRoot({
      isGlobal: true,
    }),
  ],
  controllers: [RevenueController],
  providers: [RevenueService],
})
export class PaymentModule {}
