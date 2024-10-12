import { IsString, IsNotEmpty } from 'class-validator';

// DTO for the individual series entries
export class TimeRangeDTO {
  @IsString()
  @IsNotEmpty()
  timeRange: string;
}
