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
import { ApiStreamsService } from './api-streams.service';
import { CreateStreamsDTO, TimeRangeDTO } from '@app/common/report/';

@Controller('api')
export class ApiStreamsController {
  constructor(private readonly streamsService: ApiStreamsService) {}

  @HttpCode(HttpStatus.CREATED)
  @Post('/streams')
  create(@Body() createStreamDto: CreateStreamsDTO) {
    return this.streamsService.create(createStreamDto);
  }

  @HttpCode(HttpStatus.CREATED)
  @Post('/streams/country')
  createCountryStreams(@Body() createStreamDto: CreateStreamsDTO) {
    return this.streamsService.createCountryStreams(createStreamDto);
  }

  @HttpCode(HttpStatus.OK)
  @Get('/streams/:audioId')
  findOne(
    @Param('audioId') audioId: string,
    @Query() timeRangeDto: TimeRangeDTO,
  ) {
    console.log(timeRangeDto);
    return this.streamsService.findOneById(audioId, timeRangeDto);
  }

  @HttpCode(HttpStatus.OK)
  @Get('/all-streams/:userId')
  findAll(
    @Param('userId') userId: string,
    @Query() timeRangeDto: TimeRangeDTO,
  ) {
    return this.streamsService.findAllStreamsByUserId(userId, timeRangeDto);
  }

  @HttpCode(HttpStatus.OK)
  @Get('/streams/audio-streams/:audioId')
  findAllByStreams(@Param('audioId') audioId: string) {
    return this.streamsService.findAllByAudioStreams(audioId);
  }

  @HttpCode(HttpStatus.OK)
  @Get('/streams/country/:userId')
  findAllStreamsCountry(@Param('userId') userId: string) {
    return this.streamsService.findAllCountryStreamsByUserId(userId);
  }
}
