import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { TrackDto } from './dto/track.dto';
import { UpdateTrackIdDto } from './dto/update-id.dto';

@Injectable()
export class TrackService {
  constructor(private prisma: PrismaService) {}

  // create a new track
  async createTrack(dto: TrackDto) {
    const track = await this.prisma.track.create({
      data: {
        ...dto,
      },
    });

    return track;
  }
  // get all tracks
  async getAllTracks() {
    const tracks = await this.prisma.audio.findMany({
      where: {
        Track: {
          some: {},
        },
      },
      select: {
        title: true,
        Track: {
          select: {
            id: true,
            audioId: true,
            title: true,
            productionCredit: true,
            audioLink: true,
            ISRC: true,
            trackNumber: true,
            lyrics: true,
          },
        },
      },
    });
    return tracks
      .map((audio) => {
        return audio.Track.map((track) => ({
          ...track,
          audioTitle: audio.title,
        }));
      })
      .flat();
  }
  // get track by id
  async getTrackById(trackId: string) {
    const track = await this.prisma.track.findUnique({
      where: {
        id: trackId,
      },
    });

    if (!track) {
      return null;
    }

    return track;
  }
  // update track by id
  async updateTrackById(dto: UpdateTrackIdDto) {
    const updatedTrack = await this.prisma.track.update({
      where: {
        id: dto.trackId,
      },
      data: {
        title: dto.title,
        productionCredit: dto.productionCredit,
        audioLink: dto.audioLink,
        ISRC: dto.ISRC,
        trackNumber: dto.trackNumber,
      },
    });

    return updatedTrack;
  }
}
