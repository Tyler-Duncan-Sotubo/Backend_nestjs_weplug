import { Controller } from '@nestjs/common';
import { TrackService } from './track.service';
import { TrackDto, UpdateTrackIdDto } from '@app/common/track';
import { MessagePattern } from '@nestjs/microservices';

@Controller()
export class TrackController {
  constructor(private readonly trackService: TrackService) {}

  // create a new track
  @MessagePattern('create_track')
  async createTrack(dto: TrackDto) {
    return this.trackService.createTrack(dto);
  }

  // get all tracks
  @MessagePattern('get_all_tracks')
  async getAllTracks() {
    return this.trackService.getAllTracks();
  }

  // get track by id
  @MessagePattern('get_track_by_id')
  async getTrackById(trackId: string) {
    return this.trackService.getTrackById(trackId);
  }

  // update track by id
  @MessagePattern('update_track_by_id')
  async updateTrackById(dto: UpdateTrackIdDto) {
    return this.trackService.updateTrackById(dto);
  }
}
