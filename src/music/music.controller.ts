import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { MusicService } from './music.service';
import { AudioReleaseDto } from './dto';

@Controller('api')
export class MusicController {
  constructor(private musicService: MusicService) {}

  // Add endpoints here
  @HttpCode(HttpStatus.CREATED)
  @Post('/audio-upload')
  async createAudioRelease(@Body() dto: AudioReleaseDto) {
    return this.musicService.createAudioRelease(dto);
  }
}
