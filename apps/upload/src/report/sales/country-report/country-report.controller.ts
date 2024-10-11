import { Controller, Get, Param, Body, Post } from '@nestjs/common';
import { CountryReportService } from './country-report.service';
import { CountriesResponseDTO } from './dto/country-report.dto';

@Controller('api/sales-report')
export class CountryReportController {
  constructor(private readonly service: CountryReportService) {}
  @Post('/country')
  createReportByCountry(@Body() countryReportDto: CountriesResponseDTO) {
    return this.service.createReportByCountry(countryReportDto);
  }

  @Get('/country/:id')
  findAllReportByCountry(@Param('id') id: string) {
    return this.service.fetchCountryReports(id);
  }
}
