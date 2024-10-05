import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { StoresResponseDTO } from './dto/store-report.dto';
import { StoresReportService } from './stores-report.service';

@Controller('api/sales-report')
export class StoresReportController {
  constructor(private readonly salesReportService: StoresReportService) {}
  @Post('/store')
  createReportByStore(@Body() storeReportDto: StoresResponseDTO) {
    return this.salesReportService.createReportByStore(storeReportDto);
  }

  @Get('/store/:id')
  findAllReportByStore(@Param('id') id: string) {
    return this.salesReportService.fetchStoreReports(id);
  }
}
