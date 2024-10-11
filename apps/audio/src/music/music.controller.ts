import { Controller } from '@nestjs/common';
import { MusicService } from './music.service';
import {
  AudioReleaseDto,
  UserIdDto,
  AudioByIdDto,
  UpdateAudioByIdDto,
} from 'libs/common/src/dto/music';
import { MessagePattern } from '@nestjs/microservices';

@Controller()
export class MusicController {
  constructor(private readonly musicService: MusicService) {}

  @MessagePattern('create_audio')
  async createAudioRelease(dto: AudioReleaseDto) {
    return this.musicService.createAudioRelease(dto);
  }

  @MessagePattern('get_user_audios')
  async getAudioReleases(dto: UserIdDto) {
    return this.musicService.getAudioReleasesByUserId(dto);
  }

  @MessagePattern('get_all_audios')
  async fetchAll() {
    return this.musicService.getAllAudio();
  }

  @MessagePattern('get_audio_by_id')
  async getAudioById(dto: AudioByIdDto) {
    return this.musicService.getAudioById(dto);
  }

  @MessagePattern('get_audio_track_by_id')
  async getAudioReleaseById(dto: AudioByIdDto) {
    return this.musicService.getAudioReleaseById(dto);
  }

  @MessagePattern('update_audio_by_id')
  async updateOneById(audioId: string, dto: UpdateAudioByIdDto) {
    return this.musicService.updateAudioById(dto, audioId);
  }
}
