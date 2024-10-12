import { IsString, IsNotEmpty, IsNumber } from 'class-validator';

export class TrackDto {
  @IsString()
  @IsNotEmpty()
  audioId: string;

  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsNotEmpty()
  productionCredit: string;

  @IsString()
  @IsNotEmpty()
  audioLink: string;

  @IsString()
  @IsNotEmpty()
  ISRC: string;

  @IsNumber()
  @IsNotEmpty()
  trackNumber: number;
}
