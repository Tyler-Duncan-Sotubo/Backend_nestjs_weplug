import {
  IsNumber,
  IsString,
  IsNotEmpty,
  IsPositive,
  IsArray,
} from 'class-validator';
import { Expose, Type } from 'class-transformer';

export class MonthlyReportDTO {
  @IsNotEmpty()
  @IsString()
  date: string;

  @IsNumber()
  @IsPositive()
  month: number;

  @IsNumber()
  @IsPositive()
  year: number;

  @IsNumber()
  @IsPositive()
  trackDownloads: number;

  @IsNumber()
  @IsPositive()
  streams: number;

  @IsNumber()
  @IsPositive()
  totalSales: number;

  @IsNumber()
  @IsPositive()
  earnings: number;
}

export class MonthlyReportsResponseDTO {
  @IsArray()
  @Type(() => MonthlyReportDTO) // Transform array elements into CountryDTO instances
  @Expose()
  data: MonthlyReportDTO[];

  @IsNotEmpty()
  @IsString()
  audioId: string;
}
