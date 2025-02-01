// product.dto.ts
import { IsNotEmpty, IsString, IsOptional } from 'class-validator';

export class CreateCartDto {
  @IsNotEmpty({ message: 'Product name is required' })
  @IsString({ message: 'Product name must be a string' })
  product: string;

  @IsNotEmpty({ message: 'Product ID is required' })
  @IsString({ message: 'Product ID must be a string' })
  id: string;

  @IsNotEmpty({ message: 'Description is required' })
  @IsString({ message: 'Description must be a string' })
  description: string;

  @IsNotEmpty({ message: 'Price is required' })
  @IsString({ message: 'Price must be an integer' })
  price: string;

  @IsOptional()
  @IsString({ message: 'Quantity must be an integer' })
  quantity?: number;

  @IsNotEmpty({ message: 'User ID is required' })
  @IsString({ message: 'User ID must be a string' })
  user_id: string;
}
