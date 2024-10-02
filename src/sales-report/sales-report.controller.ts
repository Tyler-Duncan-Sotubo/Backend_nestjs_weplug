import { Controller, Post, Body, Param, Get } from '@nestjs/common';
import { SalesReportService } from './sales-report.service';
import {
  MonthlyReportsResponseDTO,
  StoresResponseDTO,
  CountriesResponseDTO,
} from './dto';

@Controller('api/sales-report')
export class SalesReportController {
  constructor(private readonly salesReportService: SalesReportService) {}

  @Post('/monthly')
  createMonthlyReport(@Body() monthlyReportDto: MonthlyReportsResponseDTO) {
    return this.salesReportService.createMonthlyReport(monthlyReportDto);
  }

  @Post('/store')
  createReportByStore(@Body() storeReportDto: StoresResponseDTO) {
    return this.salesReportService.createReportByStore(storeReportDto);
  }

  @Post('/country')
  createReportByCountry(@Body() countryReportDto: CountriesResponseDTO) {
    return this.salesReportService.createReportByCountry(countryReportDto);
  }

  @Get('/month/:id')
  findAllMonthlyReport(@Param('id') id: string) {
    return this.salesReportService.fetchMonthlyReports(id);
  }

  @Get('/store/:id')
  findAllReportByStore(@Param('id') id: string) {
    return this.salesReportService.fetchStoreReports(id);
  }

  @Get('/country/:id')
  findAllReportByCountry(@Param('id') id: string) {
    return this.salesReportService.fetchCountryReports(id);
  }

  @Get('/track/:id')
  findAllReportByTrack(@Param('id') id: string) {
    return this.salesReportService.fetchReportByTrack(id);
  }
}
