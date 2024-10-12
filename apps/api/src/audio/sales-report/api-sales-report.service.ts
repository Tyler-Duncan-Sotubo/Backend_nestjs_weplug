import { Injectable, Inject } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { AUDIO_CLIENT } from '../constant';
import {
  MonthlyReportsResponseDTO,
  CountriesResponseDTO,
  StoresResponseDTO,
  SALES_PATTERN,
} from '@app/common/report';

@Injectable()
export class ApiSalesReportService {
  constructor(
    @Inject(AUDIO_CLIENT) private readonly audioClient: ClientProxy,
  ) {}

  createMonthlyReport(monthlyReportDto: MonthlyReportsResponseDTO) {
    return this.audioClient.send(
      SALES_PATTERN.CREATE_MONTHLY_SALES,
      monthlyReportDto,
    );
  }

  fetchMonthlyReports(userId: string) {
    return this.audioClient.send(SALES_PATTERN.FIND_MONTHLY_SALES, userId);
  }

  fetchReportByTrack(userId: string) {
    return this.audioClient.send(SALES_PATTERN.FIND_TRACK_SALES, userId);
  }

  createReportByStore(storeReportDto: StoresResponseDTO) {
    return this.audioClient.send(
      SALES_PATTERN.CREATE_STORE_SALES,
      storeReportDto,
    );
  }

  fetchStoreReports(userId: string) {
    return this.audioClient.send(SALES_PATTERN.FIND_STORE_SALES, userId);
  }

  createReportByCountry(countryReportDto: CountriesResponseDTO) {
    return this.audioClient.send(
      SALES_PATTERN.CREATE_COUNTRY_SALES,
      countryReportDto,
    );
  }

  fetchCountryReports(userId: string) {
    return this.audioClient.send(SALES_PATTERN.FIND_COUNTRY_SALES, userId);
  }

  fetchAudioReports(userId: string) {
    return this.audioClient.send('audio-service.fetch-audio-reports', userId);
  }
}
