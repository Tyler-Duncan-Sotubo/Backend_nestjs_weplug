import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { PaymentService } from './payment.service';
import { IdCheckDTO, PayPalDto, OrderDto } from './dto';
@Controller('api/payment')
export class PaymentController {
  constructor(private readonly paymentService: PaymentService) {}

  @Post('/paypal/create-order')
  async createOrder(@Body() dto: PayPalDto) {
    return this.paymentService.createOrder(dto);
  }

  @Post('/paypal/capture-transaction')
  async captureOrder(@Body() dto: OrderDto) {
    return this.paymentService.captureOrder(dto);
  }

  @Get('/revenue/:userId')
  accumulateEarnings(@Param('userId') userId: string) {
    return this.paymentService.accumulateEarningsForUser(userId);
  }

  @Post('/identity')
  async createIdentity(@Body() identityDto: IdCheckDTO) {
    return this.paymentService.createDocument(identityDto);
  }

  @Get('/identity/:userId')
  getIdentityStatus(@Param('userId') userId: string) {
    return this.paymentService.getDocumentStatus(userId);
  }
}
