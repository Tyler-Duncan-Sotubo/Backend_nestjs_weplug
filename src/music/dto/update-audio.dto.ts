import { IsString } from 'class-validator';

export class UpdateAudioByIdDto {
  @IsString()
  status: string;

  @IsString()
  UPC: string;

  @IsString()
  smartLink: string;

  @IsString()
  ISRC: string;

  @IsString()
  releaseAudioLink: string;
}
