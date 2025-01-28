import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  Query,
} from '@nestjs/common';
import { CountryService, StreamsService } from './services';
import { CreateStreamsDTO, TimeRangeDTO } from '../dto/report';

@Controller('api')
export class ApiStreamsController {
  constructor(
    private readonly streams: StreamsService,
    private readonly country: CountryService,
  ) {}

  @HttpCode(HttpStatus.CREATED)
  @Post('/streams')
  create(@Body() createStreamDto: CreateStreamsDTO) {
    return this.streams.create(createStreamDto);
  }

  @HttpCode(HttpStatus.CREATED)
  @Post('/streams/country')
  createCountryStreams(@Body() createStreamDto: CreateStreamsDTO) {
    return this.country.create(createStreamDto);
  }

  @HttpCode(HttpStatus.OK)
  @Get('/streams/:audioId')
  findOne(
    @Param('audioId') audioId: string,
    @Query() timeRangeDto: TimeRangeDTO,
  ) {
    return this.streams.findOneById(audioId, timeRangeDto);
  }

  @HttpCode(HttpStatus.OK)
  @Get('/all-streams/:userId')
  findAll(
    @Param('userId') userId: string,
    @Query() timeRangeDto: TimeRangeDTO,
  ) {
    return this.streams.findAllStreamsByUserId(userId, timeRangeDto);
  }

  @HttpCode(HttpStatus.OK)
  @Get('/streams/audio-streams/:audioId')
  findAllByStreams(@Param('audioId') audioId: string) {
    return this.streams.findAllByAudioStreams(audioId);
  }

  @HttpCode(HttpStatus.OK)
  @Get('/streams/country/:userId')
  findAllStreamsCountry(@Param('userId') userId: string) {
    return this.country.findAllCountryStreamsByUserId(userId);
  }
}
