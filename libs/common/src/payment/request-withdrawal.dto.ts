import { IsString } from 'class-validator';

export class RequestWithdrawalDto {
  @IsString()
  userId: string;
}
