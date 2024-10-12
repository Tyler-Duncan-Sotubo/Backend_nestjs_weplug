import { Controller } from '@nestjs/common';
import { RevenueService } from './revenue.service';
import { MessagePattern, Payload } from '@nestjs/microservices';

@Controller()
export class RevenueController {
  constructor(private readonly paymentService: RevenueService) {}

  @MessagePattern('accumulate_earnings')
  async accumulateEarningsForUser(@Payload() userId: string) {
    return this.paymentService.accumulateEarningsForUser(userId);
  }
}
