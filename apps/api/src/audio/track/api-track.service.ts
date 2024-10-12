import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { TrackDto, UpdateTrackIdDto } from '@app/common/track';
import { AUDIO_CLIENT } from '../constant';

@Injectable()
export class ApiTrackService {
  constructor(
    @Inject(AUDIO_CLIENT) private readonly audioClient: ClientProxy,
  ) {}

  createTrack(trackDto: TrackDto) {
    return this.audioClient.send('create_track', trackDto);
  }

  getAllTracks() {
    return this.audioClient.send('get_all_tracks', {});
  }

  getTrackById(trackId: string) {
    return this.audioClient.send('get_track_by_id', trackId);
  }

  updateTrackById(updateTrackIdDto: UpdateTrackIdDto) {
    return this.audioClient.send('update_track_by_id', updateTrackIdDto);
  }
}
