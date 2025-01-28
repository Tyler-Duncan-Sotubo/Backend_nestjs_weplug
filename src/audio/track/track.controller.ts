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
import { TrackService } from './track.service';
import { TrackDto, UpdateTrackIdDto } from '../dto/track';

@Controller('api/tracks')
export class TrackController {
  constructor(private readonly track: TrackService) {}

  // create a new track
  @HttpCode(HttpStatus.CREATED)
  @Post()
  async createTrack(@Body() trackDto: TrackDto) {
    return this.track.createTrack(trackDto);
  }

  // get all tracks
  @HttpCode(HttpStatus.OK)
  @Get('')
  async getAllTracks() {
    return this.track.getAllTracks();
  }

  // get track by id
  @HttpCode(HttpStatus.OK)
  @Get('/:trackId')
  async getTrackById(@Param('trackId') trackId: string) {
    return this.track.getTrackById(trackId);
  }

  // update track by id
  @HttpCode(HttpStatus.OK)
  @Put()
  async updateTrackById(@Body() updateTrackDto: UpdateTrackIdDto) {
    return this.track.updateTrackById(updateTrackDto);
  }
}
