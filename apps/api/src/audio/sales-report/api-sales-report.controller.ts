import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
} from '@nestjs/common';
import { ApiSalesReportService } from './api-sales-report.service';
import {
  MonthlyReportsResponseDTO,
  CountriesResponseDTO,
  StoresResponseDTO,
} from '@app/common/report';

@Controller('api/sales-report')
export class ApiSalesReportController {
  constructor(private readonly salesReportService: ApiSalesReportService) {}

  @HttpCode(HttpStatus.CREATED)
  @Post('/monthly')
  createMonthlyReport(@Body() monthlyReportDto: MonthlyReportsResponseDTO) {
    return this.salesReportService.createMonthlyReport(monthlyReportDto);
  }

  @HttpCode(HttpStatus.OK)
  @Get('/month/:userId')
  findAllMonthlyReport(@Param('userId') userId: string) {
    return this.salesReportService.fetchMonthlyReports(userId);
  }

  @HttpCode(HttpStatus.OK)
  @Get('/track/:userId')
  findAllReportByTrack(@Param('userId') userId: string) {
    return this.salesReportService.fetchReportByTrack(userId);
  }

  @HttpCode(HttpStatus.CREATED)
  @Post('/store')
  createReportByStore(@Body() storeReportDto: StoresResponseDTO) {
    return this.salesReportService.createReportByStore(storeReportDto);
  }

  @HttpCode(HttpStatus.OK)
  @Get('/store/:userId')
  findAllReportByStore(@Param('userId') userId: string) {
    return this.salesReportService.fetchStoreReports(userId);
  }

  @HttpCode(HttpStatus.CREATED)
  @Post('/country')
  createReportByCountry(@Body() countryReportDto: CountriesResponseDTO) {
    return this.salesReportService.createReportByCountry(countryReportDto);
  }

  @HttpCode(HttpStatus.OK)
  @Get('/country/:userId')
  findAllReportByCountry(@Param('userId') userId: string) {
    return this.salesReportService.fetchCountryReports(userId);
  }

  @HttpCode(HttpStatus.OK)
  @Get('/audio/:userId')
  fetchAudioReports(@Param('userId') userId: string) {
    return this.salesReportService.fetchAudioReports(userId);
  }
}
