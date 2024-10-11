import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import {
  AudioReleaseDto,
  UserIdDto,
  AudioByIdDto,
  UpdateAudioByIdDto,
} from 'libs/common/src/dto/music';

@Injectable()
export class ApiMusicService {
  constructor(
    @Inject('AUDIO_SERVICE') private readonly audioClient: ClientProxy,
  ) {}

  createAudioRelease(audioReleaseDto: AudioReleaseDto) {
    return this.audioClient.send('create_audio', audioReleaseDto);
  }

  getAudioReleasesByUserId(userIdDto: UserIdDto) {
    return this.audioClient.send('get_user_audios', userIdDto);
  }

  getAllAudio() {
    return this.audioClient.send('get_all_audios', {});
  }

  getAudioById(audioIdDto: AudioByIdDto) {
    return this.audioClient.send('get_audio_by_id', audioIdDto);
  }

  getAudioReleaseById(audioIdDto: AudioByIdDto) {
    return this.audioClient.send('get_audio_track_by_id', audioIdDto);
  }

  updateAudioById(updateAudioByIdDto: UpdateAudioByIdDto, audioId: string) {
    return this.audioClient.send('update_audio_by_id', {
      updateAudioByIdDto,
      audioId,
    });
  }
}
