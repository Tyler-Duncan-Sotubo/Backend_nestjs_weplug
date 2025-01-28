import {
  IsInt,
  IsString,
  IsArray,
  ValidateNested,
  IsDateString,
  IsNotEmpty,
} from 'class-validator';
import { Type } from 'class-transformer';

// DTO for the individual series entries
class SeriesDTO {
  @IsInt()
  total: number;

  @IsDateString()
  date: string;
}

// DTO for each platform (Spotify, YouTube, etc.)
class PlatformDataDTO {
  @IsString()
  key: string;

  @IsInt()
  total: number;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => SeriesDTO)
  series: SeriesDTO[];
}

// Root DTO for the complete data set
export class CreateStreamsDTO {
  @IsString()
  @IsNotEmpty()
  audioId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => PlatformDataDTO)
  data: PlatformDataDTO[];
}
