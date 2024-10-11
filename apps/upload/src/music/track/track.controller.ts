import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { TrackService } from './track.service';
import { TrackDto } from './dto/track.dto';
import { UpdateTrackIdDto } from './dto/update-id.dto';

@Controller('api/tracks')
export class TrackController {
  constructor(private readonly trackService: TrackService) {}

  // create a new track
  @HttpCode(HttpStatus.CREATED)
  @Post()
  async createTrack(@Body() dto: TrackDto) {
    return this.trackService.createTrack(dto);
  }

  // get all tracks
  @HttpCode(HttpStatus.OK)
  @Get('')
  async getAllTracks() {
    return this.trackService.getAllTracks();
  }

  // get track by id
  @HttpCode(HttpStatus.OK)
  @Get('/:trackId')
  async getTrackById(@Param('trackId') trackId: string) {
    return this.trackService.getTrackById(trackId);
  }

  // update track by id
  @HttpCode(HttpStatus.OK)
  @Put()
  async updateTrackById(@Body() dto: UpdateTrackIdDto) {
    return this.trackService.updateTrackById(dto);
  }
}
