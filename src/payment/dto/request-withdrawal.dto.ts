import { IsNumber } from 'class-validator';

export class RequestWithdrawalDto {
  @IsNumber()
  amount: number;
}
