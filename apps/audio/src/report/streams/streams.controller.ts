import { Controller } from '@nestjs/common';
import { StreamsService } from './services/streams.service';
import { CountryService } from './services/country.service';
import { MessagePattern, Payload } from '@nestjs/microservices';
import {
  STREAMS_PATTERN,
  CreateStreamsDTO,
  TimeRangeDTO,
} from '@app/common/report/';

@Controller()
export class StreamsController {
  constructor(
    private readonly streamsService: StreamsService,
    private readonly countryService: CountryService,
  ) {}

  @MessagePattern(STREAMS_PATTERN.CREATE_STREAM)
  create(@Payload() createStreamDto: CreateStreamsDTO) {
    return this.streamsService.create(createStreamDto);
  }

  @MessagePattern(STREAMS_PATTERN.CREATE_COUNTRY_STREAM)
  createCountryStreams(@Payload() createStreamDto: CreateStreamsDTO) {
    return this.countryService.create(createStreamDto);
  }

  @MessagePattern(STREAMS_PATTERN.FIND_ALL)
  findAllByStreams(@Payload() audioId: string) {
    return this.streamsService.findAllByAudioStreams(audioId);
  }

  @MessagePattern(STREAMS_PATTERN.FIND_ALL_STREAMS_BY_AUDIO_ID)
  findOne(@Payload() Payload: { audioId: string; timeRangeDto: TimeRangeDTO }) {
    return this.streamsService.findOneById(
      Payload.audioId,
      Payload.timeRangeDto,
    );
  }

  @MessagePattern(STREAMS_PATTERN.FIND_ALL_STREAMS_BY_USER_ID)
  findAll(@Payload() Payload: { userId: string; timeRangeDto: TimeRangeDTO }) {
    return this.streamsService.findAllStreamsByUserId(
      Payload.userId,
      Payload.timeRangeDto,
    );
  }

  @MessagePattern(STREAMS_PATTERN.FIND_ALL_STREAMS_COUNTRY)
  findAllStreamsCountry(@Payload() userId: string) {
    return this.countryService.findAllCountryStreamsByUserId(userId);
  }
}
