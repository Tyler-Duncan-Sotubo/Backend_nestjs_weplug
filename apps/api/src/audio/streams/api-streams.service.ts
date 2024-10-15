import { Injectable, Inject } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { AUDIO_CLIENT } from '../constant';
import {
  CreateStreamsDTO,
  TimeRangeDTO,
  STREAMS_PATTERN,
} from '@app/common/report/';

@Injectable()
export class ApiStreamsService {
  constructor(
    @Inject(AUDIO_CLIENT) private readonly audioClient: ClientProxy,
  ) {}

  create(createStreamDto: CreateStreamsDTO) {
    return this.audioClient.send(
      STREAMS_PATTERN.CREATE_STREAM,
      createStreamDto,
    );
  }

  createCountryStreams(createStreamDto: CreateStreamsDTO) {
    return this.audioClient.send(
      STREAMS_PATTERN.CREATE_COUNTRY_STREAM,
      createStreamDto,
    );
  }

  findOneById(audioId: string, timeRangeDto: TimeRangeDTO) {
    return this.audioClient.send(STREAMS_PATTERN.FIND_ALL_STREAMS_BY_AUDIO_ID, {
      audioId,
      timeRangeDto,
    });
  }

  findAllStreamsByUserId(userId: string, timeRangeDto: TimeRangeDTO) {
    return this.audioClient.send(STREAMS_PATTERN.FIND_ALL_STREAMS_BY_USER_ID, {
      userId,
      timeRangeDto, // This is the time range for the streams
    });
  }

  findAllByAudioStreams(id: string) {
    return this.audioClient.send(STREAMS_PATTERN.FIND_ALL, id);
  }

  findAllCountryStreamsByUserId(id: string) {
    return this.audioClient.send(STREAMS_PATTERN.FIND_ALL_STREAMS_COUNTRY, id);
  }
}
