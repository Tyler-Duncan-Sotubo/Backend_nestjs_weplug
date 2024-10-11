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
import { ApiMusicService } from './api-music.service';
import {
  AudioReleaseDto,
  UserIdDto,
  AudioByIdDto,
  UpdateAudioByIdDto,
} from 'libs/common/src/dto/music';

@Controller('api')
export class ApiMusicController {
  constructor(private readonly musicService: ApiMusicService) {}

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
  @Get('/audio-by-id/audio/:audioId')
  async getAudioById(@Param() dto: AudioByIdDto) {
    return this.musicService.getAudioById(dto);
  }

  @HttpCode(HttpStatus.OK)
  @Put('/audio-by-id/:audioId')
  async updateOneById(
    @Param('audioId') audioId: string,
    @Body() dto: UpdateAudioByIdDto,
  ) {
    return this.musicService.updateAudioById(dto, audioId);
  }
}
