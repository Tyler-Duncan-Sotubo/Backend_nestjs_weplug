import { IsString, IsNotEmpty, IsObject } from 'class-validator';

export class DocumentDTO {
  @IsNotEmpty()
  @IsObject()
  user: string;

  @IsString()
  @IsNotEmpty()
  imageFileName: string;

  @IsString()
  @IsNotEmpty()
  image: string;
}
