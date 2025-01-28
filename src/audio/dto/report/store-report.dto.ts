import {
  IsNumber,
  IsString,
  IsNotEmpty,
  IsPositive,
  IsArray,
} from 'class-validator';

export class StoreDTO {
  @IsNotEmpty()
  @IsString()
  store: string;

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

export class StoresResponseDTO {
  @IsArray()
  data: StoreDTO[];

  @IsNotEmpty()
  @IsString()
  audioId: string;
}
