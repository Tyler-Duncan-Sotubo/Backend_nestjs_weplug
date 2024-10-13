import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ApiPaymentService } from './payment.service';
import { IdCheckDTO, PayPalDto, OrderDto } from '@app/common/payment';
@Controller('api/payment')
export class PaymentController {
  constructor(private readonly paymentService: ApiPaymentService) {}

  @Post('/paypal/create-order')
  async createOrder(@Body() dto: PayPalDto) {
    return this.paymentService.createPaypalOrder(dto);
  }

  @Post('/paypal/capture-transaction')
  async captureOrder(@Body() dto: OrderDto) {
    return this.paymentService.capturePaypalOrder(dto);
  }

  @Get('/revenue/:userId')
  accumulateEarnings(@Param('userId') userId: string) {
    return this.paymentService.accumulateEarningsForUser(userId);
  }

  @Post('/identity')
  async createIdentity(@Body() identityDto: IdCheckDTO) {
    return this.paymentService.createIdentity(identityDto);
  }

  @Get('/identity/:userId')
  getIdentityStatus(@Param('userId') userId: string) {
    return this.paymentService.getIdentityStatus(userId);
  }
}
