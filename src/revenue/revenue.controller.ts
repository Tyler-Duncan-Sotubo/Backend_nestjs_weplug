import { Controller, Param, Get } from '@nestjs/common';
import { RevenueService } from './revenue.service';

@Controller('api/revenue')
export class RevenueController {
  constructor(private readonly revenueService: RevenueService) {}

  @Get('/:userId')
  async createRevenue(@Param('userId') userId: string) {
    return this.revenueService.accumulateEarningsForUser(userId); // post
  }
}
