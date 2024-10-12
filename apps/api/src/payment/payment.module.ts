import { Module } from '@nestjs/common';
import { ClientConfigService } from '../client-config/client-config.service';
import { ClientConfigModule } from '../client-config/client-config.module';
import { ClientProxyFactory } from '@nestjs/microservices';
import { PAYMENT_CLIENT } from './constant';
import { PaymentController } from './payment.controller';
import { ApiPaymentService } from './payment.service';

@Module({
  imports: [ClientConfigModule],
  controllers: [PaymentController],
  providers: [
    ApiPaymentService,
    {
      provide: PAYMENT_CLIENT,
      useFactory: (configService: ClientConfigService) => {
        const clientOptions = configService.getPaymentClientOptions();
        return ClientProxyFactory.create(clientOptions);
      },
      inject: [ClientConfigService],
    },
  ],
})
export class PaymentModule {}
