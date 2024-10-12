import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ApiPaymentService } from './payment.service';
import { IdCheckDTO } from '@app/common/payment';
@Controller('api/payment')
export class PaymentController {
  constructor(private readonly paymentService: ApiPaymentService) {}

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
