import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateUserInfo {
  @IsNotEmpty()
  @IsString()
  user_id: string;

  @IsNotEmpty()
  @IsString()
  firstName: string;

  @IsNotEmpty()
  @IsString()
  lastName: string;

  @IsNotEmpty()
  @IsString()
  artistName: string;

  @IsNotEmpty()
  @IsString()
  label: string;

  @IsNotEmpty()
  @IsString()
  phone: string;

  @IsOptional()
  @IsString()
  country: string;

  @IsOptional()
  @IsString()
  howDidYouHearAboutUs: string;

  @IsOptional()
  @IsString()
  youtube: string;

  @IsOptional()
  @IsString()
  instagram: string;

  @IsOptional()
  @IsString()
  twitter: string;

  @IsOptional()
  @IsString()
  facebook: string;

  @IsOptional()
  @IsString()
  vevo: string;

  @IsOptional()
  @IsString()
  tiktok: string;

  @IsOptional()
  @IsString()
  soundcloud: string;

  @IsOptional()
  @IsString()
  website: string;

  @IsOptional()
  @IsString()
  spotify: string;

  @IsOptional()
  @IsString()
  apple: string;

  @IsOptional()
  @IsString()
  artistBio: string;
}
