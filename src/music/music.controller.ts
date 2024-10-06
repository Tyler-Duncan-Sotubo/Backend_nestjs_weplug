import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { MusicService } from './music.service';
import {
  AudioByIdDto,
  AudioReleaseDto,
  UpdateAudioByIdDto,
  UserIdDto,
} from './dto';

@Controller('api')
export class MusicController {
  constructor(private musicService: MusicService) {}

  // Add endpoints here
  @HttpCode(HttpStatus.CREATED)
  @Post('/audio-upload')
  async createAudioRelease(@Body() dto: AudioReleaseDto) {
    return this.musicService.createAudioRelease(dto);
  }

  @HttpCode(HttpStatus.OK)
  @Get('/audio/:userId')
  async getAudioReleases(@Param() dto: UserIdDto) {
    return this.musicService.getAudioReleasesByUserId(dto);
  }

  @HttpCode(HttpStatus.OK)
  @Get('/audio')
  async fetchAll() {
    return this.musicService.getAllAudio();
  }

  @HttpCode(HttpStatus.OK)
  @Get('/audio-by-id/:audioId')
  async getAudioReleaseById(@Param() dto: AudioByIdDto) {
    return this.musicService.getAudioReleaseById(dto);
  }

  @HttpCode(HttpStatus.OK)
  @Put('/audio-by-id/:audioId')
  async updateOneById(
    @Param('audioId') audioId: string,
    @Body() dto: UpdateAudioByIdDto,
  ) {
    return this.musicService.updateAudioById(dto, audioId);
  }

  @HttpCode(HttpStatus.OK)
  @Get('/audio-by-id/audio/:audioId')
  async getAudioById(@Param() dto: AudioByIdDto) {
    return this.musicService.getAudioById(dto);
  }
}
