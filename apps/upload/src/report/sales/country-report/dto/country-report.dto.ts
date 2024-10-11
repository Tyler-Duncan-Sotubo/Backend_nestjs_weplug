import {
  IsNumber,
  IsString,
  IsNotEmpty,
  IsPositive,
  IsArray,
} from 'class-validator';

export class CountryDTO {
  @IsNotEmpty()
  @IsString()
  country: string;

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

export class CountriesResponseDTO {
  @IsArray()
  data: CountryDTO[];

  @IsNotEmpty()
  @IsString()
  audioId: string;
}
