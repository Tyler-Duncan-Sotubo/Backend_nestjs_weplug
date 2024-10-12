import { Controller } from '@nestjs/common';
import { CountryReportService } from './services/country-report.service';
import { MonthlySalesService } from './services/monthly-sales.service';
import { StoresReportService } from './services/stores-report.service';
import {
  MonthlyReportsResponseDTO,
  CountriesResponseDTO,
  StoresResponseDTO,
  SALES_PATTERN,
} from '@app/common/report';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { AudioReportService } from './services/audio-report.service';

@Controller('api/sales-report')
export class SalesReportController {
  constructor(
    private readonly service: CountryReportService,
    private readonly monthlySalesService: MonthlySalesService,
    private readonly salesReportService: StoresReportService,
    private readonly audioReportService: AudioReportService,
  ) {}

  @MessagePattern(SALES_PATTERN.CREATE_MONTHLY_SALES)
  createMonthlyReport(@Payload() monthlyReportDto: MonthlyReportsResponseDTO) {
    return this.monthlySalesService.createMonthlyReport(monthlyReportDto);
  }

  @MessagePattern(SALES_PATTERN.FIND_MONTHLY_SALES)
  findAllMonthlyReport(@Payload() userId: string) {
    return this.monthlySalesService.fetchMonthlyReports(userId);
  }

  @MessagePattern(SALES_PATTERN.FIND_TRACK_SALES)
  findAllReportByTrack(@Payload() userId: string) {
    return this.monthlySalesService.fetchReportByTrack(userId);
  }

  @MessagePattern(SALES_PATTERN.CREATE_COUNTRY_SALES)
  createReportByCountry(@Payload() countryReportDto: CountriesResponseDTO) {
    return this.service.createReportByCountry(countryReportDto);
  }

  @MessagePattern(SALES_PATTERN.FIND_COUNTRY_SALES)
  findAllReportByCountry(@Payload() userId: string) {
    return this.service.fetchCountryReports(userId);
  }

  @MessagePattern(SALES_PATTERN.CREATE_STORE_SALES)
  createReportByStore(@Payload() storeReportDto: StoresResponseDTO) {
    return this.salesReportService.createReportByStore(storeReportDto);
  }

  @MessagePattern(SALES_PATTERN.FIND_STORE_SALES)
  findAllReportByStore(@Payload() userId: string) {
    return this.salesReportService.fetchStoreReports(userId);
  }

  @MessagePattern('audio-service.fetch-audio-reports')
  async fetchAudioReports(@Payload() userId: string) {
    return this.audioReportService.fetchUserAudioReports(userId);
  }
}
