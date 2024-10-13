import { Body, Controller } from '@nestjs/common';
import { OrderDto, PayPalDto, PAYPAL_PATTERN } from '@app/common/payment';
import { PaypalService } from './paypal.service';
import { MessagePattern } from '@nestjs/microservices';

@Controller('paypal')
export class PaypalController {
  constructor(private paypalService: PaypalService) {}

  @MessagePattern(PAYPAL_PATTERN.CREATE_ORDER)
  async createOrder(@Body() dto: PayPalDto) {
    return this.paypalService.createOrder(dto);
  }

  @MessagePattern(PAYPAL_PATTERN.CAPTURE_ORDER)
  async captureTransaction(@Body() dto: OrderDto) {
    return this.paypalService.captureOrder(dto);
  }
}
