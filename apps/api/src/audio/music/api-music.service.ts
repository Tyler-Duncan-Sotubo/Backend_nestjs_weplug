import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import {
  AudioReleaseDto,
  UserIdDto,
  AudioByIdDto,
  UpdateAudioByIdDto,
  MUSIC_PATTERNS,
} from 'libs/common/src/music/';
import { AUDIO_CLIENT } from '../constant';

@Injectable()
export class ApiMusicService {
  constructor(
    @Inject(AUDIO_CLIENT) private readonly audioClient: ClientProxy,
  ) {}

  createAudioRelease(audioReleaseDto: AudioReleaseDto) {
    return this.audioClient.send(MUSIC_PATTERNS.CREATE, audioReleaseDto);
  }

  getAudioReleasesByUserId(userIdDto: UserIdDto) {
    return this.audioClient.send(MUSIC_PATTERNS.FIND_ALL_BY_USER, userIdDto);
  }

  getAllAudio() {
    return this.audioClient.send(MUSIC_PATTERNS.FIND_ALL, {});
  }

  getAudioById(audioIdDto: AudioByIdDto) {
    return this.audioClient.send(MUSIC_PATTERNS.FIND_ONE, audioIdDto);
  }

  getAudioReleaseById(audioIdDto: AudioByIdDto) {
    return this.audioClient.send(MUSIC_PATTERNS.FIND_ONE_TRACK, audioIdDto);
  }

  updateAudioById(updateAudioByIdDto: UpdateAudioByIdDto, audioId: string) {
    return this.audioClient.send(MUSIC_PATTERNS.UPDATE_ONE, {
      updateAudioByIdDto,
      audioId,
    });
  }
}
