import { IsString } from 'class-validator';

export class AccumulateEarningsDto {
  @IsString()
  userId: string;
}
