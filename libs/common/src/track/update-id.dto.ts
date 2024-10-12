import { IsString, IsNotEmpty, IsNumber } from 'class-validator';

export class UpdateTrackIdDto {
  @IsString()
  @IsNotEmpty()
  trackId: string;

  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
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
