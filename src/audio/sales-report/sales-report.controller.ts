import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
} from '@nestjs/common';
import {
  MonthlySalesService,
  CountryReportService,
  StoresReportService,
} from './services';
import {
  MonthlyReportsResponseDTO,
  CountriesResponseDTO,
  StoresResponseDTO,
} from '../dto/report';

@Controller('api/sales-report')
export class SalesReportController {
  constructor(
    private readonly monthly: MonthlySalesService,
    private readonly country: CountryReportService,
    private readonly store: StoresReportService,
  ) {}

  @HttpCode(HttpStatus.CREATED)
  @Post('/monthly')
  createMonthlyReport(@Body() monthlyReportDto: MonthlyReportsResponseDTO) {
    return this.monthly.createMonthlyReport(monthlyReportDto);
  }

  @HttpCode(HttpStatus.OK)
  @Get('/month/:userId')
  findAllMonthlyReport(@Param('userId') userId: string) {
    return this.monthly.fetchMonthlyReports(userId);
  }

  @HttpCode(HttpStatus.OK)
  @Get('/track/:userId')
  findAllReportByTrack(@Param('userId') userId: string) {
    return this.monthly.fetchReportByTrack(userId);
  }

  @HttpCode(HttpStatus.CREATED)
  @Post('/store')
  createReportByStore(@Body() storeReportDto: StoresResponseDTO) {
    return this.store.createReportByStore(storeReportDto);
  }

  @HttpCode(HttpStatus.OK)
  @Get('/store/:userId')
  findAllReportByStore(@Param('userId') userId: string) {
    return this.store.fetchStoreReports(userId);
  }

  @HttpCode(HttpStatus.CREATED)
  @Post('/country')
  createReportByCountry(@Body() countryReportDto: CountriesResponseDTO) {
    return this.country.createReportByCountry(countryReportDto);
  }

  @HttpCode(HttpStatus.OK)
  @Get('/country/:userId')
  findAllReportByCountry(@Param('userId') userId: string) {
    return this.country.fetchCountryReports(userId);
  }
}
