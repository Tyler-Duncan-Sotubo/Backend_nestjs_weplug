import { Injectable, Inject } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { PAYMENT_CLIENT } from './constant';
import {
  IDENTITY_PATTERN,
  IdCheckDTO,
  PAYPAL_PATTERN,
  PayPalDto,
  OrderDto,
} from '@app/common/payment';

@Injectable()
export class ApiPaymentService {
  constructor(
    @Inject(PAYMENT_CLIENT) private readonly audioClient: ClientProxy,
  ) {}

  // This method is used to create a PayPal order
  createPaypalOrder(paypalOrder: PayPalDto) {
    return this.audioClient.send(PAYPAL_PATTERN.CREATE_ORDER, paypalOrder);
  }

  // This method is used to capture a PayPal order
  capturePaypalOrder(order: OrderDto) {
    return this.audioClient.send(PAYPAL_PATTERN.CAPTURE_ORDER, order);
  }

  accumulateEarningsForUser(userId: string) {
    return this.audioClient.send('accumulate_earnings', userId);
  }

  async createIdentity(identityDto: IdCheckDTO) {
    return this.audioClient.send(IDENTITY_PATTERN.CREATE, identityDto);
  }

  getIdentityStatus(userId: string) {
    return this.audioClient.send(IDENTITY_PATTERN.FIND_ONE, userId);
  }
}
