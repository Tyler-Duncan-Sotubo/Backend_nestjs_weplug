import { IsNotEmpty, IsString } from 'class-validator';

export class UpdateProfilePhotoDto {
  @IsString()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  image: string;

  @IsString()
  @IsNotEmpty()
  imageFileName: string;
}
