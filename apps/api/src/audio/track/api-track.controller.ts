import {
  Body,
  Controller,
  HttpCode,
  HttpStatus,
  Param,
  Get,
  Put,
  Post,
} from '@nestjs/common';
import { ApiTrackService } from './api-track.service';
import { TrackDto, UpdateTrackIdDto } from '@app/common/track/index';

@Controller('api/tracks')
export class ApiTrackController {
  constructor(private readonly apiTrackService: ApiTrackService) {}

  // create a new track
  @HttpCode(HttpStatus.CREATED)
  @Post()
  async createTrack(@Body() trackDto: TrackDto) {
    return this.apiTrackService.createTrack(trackDto);
  }

  // get all tracks
  @HttpCode(HttpStatus.OK)
  @Get('')
  async getAllTracks() {
    return this.apiTrackService.getAllTracks();
  }

  // get track by id
  @HttpCode(HttpStatus.OK)
  @Get('/:trackId')
  async getTrackById(@Param('trackId') trackId: string) {
    return this.apiTrackService.getTrackById(trackId);
  }

  // update track by id
  @HttpCode(HttpStatus.OK)
  @Put()
  async updateTrackById(@Body() updateTrackDto: UpdateTrackIdDto) {
    return this.apiTrackService.updateTrackById(updateTrackDto);
  }
}
