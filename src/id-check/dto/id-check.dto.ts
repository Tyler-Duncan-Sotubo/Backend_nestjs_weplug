import { IsString, IsNotEmpty, IsObject } from 'class-validator';

export class IdCheckDTO {
  @IsNotEmpty()
  @IsObject()
  user: string;

  @IsString()
  @IsNotEmpty()
  imageFileName: string;

  @IsString()
  @IsNotEmpty()
  documentType: string;

  @IsString()
  @IsNotEmpty()
  image: string;
}
