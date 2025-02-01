import {
  IsNotEmpty,
  IsString,
  IsUUID,
  IsDate,
  IsOptional,
  IsIn,
} from 'class-validator';

export class SubscriptionsDto {
  @IsOptional()
  @IsUUID()
  id?: string;

  @IsNotEmpty({ message: 'User ID is required' })
  @IsString({ message: 'User ID must be a string' })
  user_id: string;

  @IsNotEmpty({ message: 'Plan is required' })
  @IsString({ message: 'Plan must be a string' })
  plan: string;

  @IsOptional()
  @IsString({ message: 'Status must be a string' })
  @IsIn(['active', 'inactive'], {
    message: 'Status must be active or inactive',
  })
  status?: string;

  @IsOptional()
  @IsDate({ message: 'Created date must be a valid date' })
  createdAt?: Date;

  @IsOptional()
  @IsDate({ message: 'Updated date must be a valid date' })
  updatedAt?: Date;

  @IsNotEmpty({ message: 'Expiry date is required' })
  @IsDate({ message: 'Expiry date must be a valid date' })
  expiresAt: Date;
}
