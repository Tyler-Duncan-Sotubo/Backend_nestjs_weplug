import { Module } from '@nestjs/common';
import { AudioModule } from './audio/audio.module';
import { ClientConfigModule } from './client-config/client-config.module';
import { PaymentModule } from './payment/payment.module';

@Module({
  imports: [AudioModule, ClientConfigModule, PaymentModule],
  controllers: [],
  providers: [],
})
export class ApiModule {}
