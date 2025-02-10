import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
} from '@nestjs/common';
import { PaymentService } from './payment.service';
import { IdCheckDTO, PayPalDto, OrderDto, RequestWithdrawalDto } from './dto';
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

  @HttpCode(HttpStatus.CREATED)
  @Post('/request/:userId')
  async payoutUser(
    @Param('userId') userId: string,
    @Body() amount: RequestWithdrawalDto,
  ) {
    return this.paymentService.requestPayment(userId, amount);
  }

  @HttpCode(HttpStatus.CREATED)
  @Get('/payout/:userId')
  async getUserPayout(@Param('userId') userId: string) {
    return this.paymentService.getUserPayouts(userId);
  }

  @HttpCode(HttpStatus.CREATED)
  @Get('/payouts/:userId')
  async getUserPayouts(@Param('userId') userId: string) {
    return this.paymentService.getUserPayouts(userId);
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
