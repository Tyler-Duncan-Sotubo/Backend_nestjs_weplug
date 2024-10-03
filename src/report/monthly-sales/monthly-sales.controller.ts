import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { MonthlyReportsResponseDTO } from './dto/monthly-report.dto';
import { MonthlySalesService } from './monthly-sales.service';

@Controller('api/sales-report')
export class MonthlySalesController {
  constructor(private readonly monthlySalesService: MonthlySalesService) {}
  @Post('/monthly')
  createMonthlyReport(@Body() monthlyReportDto: MonthlyReportsResponseDTO) {
    return this.monthlySalesService.createMonthlyReport(monthlyReportDto);
  }

  @Get('/month/:id')
  findAllMonthlyReport(@Param('id') id: string) {
    return this.monthlySalesService.fetchMonthlyReports(id);
  }

  @Get('/track/:id')
  findAllReportByTrack(@Param('id') id: string) {
    return this.monthlySalesService.fetchReportByTrack(id);
  }
}
