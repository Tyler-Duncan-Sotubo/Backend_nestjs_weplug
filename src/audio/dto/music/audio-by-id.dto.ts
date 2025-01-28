import { IsString, IsNotEmpty } from 'class-validator';

export class AudioByIdDto {
  @IsString()
  @IsNotEmpty()
  audioId: string;
}
