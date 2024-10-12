import { Controller } from '@nestjs/common';
import { MusicService } from './music.service';
import {
  AudioReleaseDto,
  UserIdDto,
  AudioByIdDto,
  UpdateAudioByIdDto,
  MUSIC_PATTERNS,
} from 'libs/common/src/music/';
import { MessagePattern, Payload } from '@nestjs/microservices';

@Controller()
export class MusicController {
  constructor(private readonly musicService: MusicService) {}

  @MessagePattern(MUSIC_PATTERNS.CREATE)
  async createAudioRelease(@Payload() dto: AudioReleaseDto) {
    return this.musicService.createAudioRelease(dto);
  }

  @MessagePattern(MUSIC_PATTERNS.FIND_ALL_BY_USER)
  async getAudioReleases(@Payload() dto: UserIdDto) {
    return this.musicService.getAudioReleasesByUserId(dto);
  }

  @MessagePattern(MUSIC_PATTERNS.FIND_ALL)
  async fetchAll() {
    return this.musicService.getAllAudio();
  }

  @MessagePattern(MUSIC_PATTERNS.FIND_ONE)
  async getAudioById(dto: AudioByIdDto) {
    return this.musicService.getAudioById(dto);
  }

  @MessagePattern(MUSIC_PATTERNS.FIND_ONE_TRACK)
  async getAudioReleaseById(@Payload() dto: AudioByIdDto) {
    return this.musicService.getAudioReleaseById(dto);
  }

  @MessagePattern(MUSIC_PATTERNS.UPDATE_ONE)
  async updateOneById(@Payload() audioId: string, dto: UpdateAudioByIdDto) {
    return this.musicService.updateAudioById(dto, audioId);
  }
}
