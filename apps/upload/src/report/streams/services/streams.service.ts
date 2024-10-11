import { Injectable } from '@nestjs/common';
import { CreateStreamsDTO } from '../dto/create-stream.dto';
import { PrismaService } from 'src/database/prisma.service';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library';
import { TimeRangeDTO } from '../dto/time-range.dto';
import { CacheService } from 'src/cache/cache.service';

@Injectable()
export class StreamsService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly cacheService: CacheService,
  ) {}

  async create(CreateStreamDTO: CreateStreamsDTO) {
    try {
      const dspKeys = this.extractDspKeys(CreateStreamDTO);

      // Fetch DSP platforms in one query
      const platformMap = await this.fetchDspPlatformMap(dspKeys);

      // Prepare stream data for bulk insertion
      const streamsData = this.prepareStreamsData(CreateStreamDTO, platformMap);

      // Bulk insert streams
      await this.insertStreamsData(streamsData);

      return 'All streams inserted successfully!';
    } catch (error) {
      this.handleError(error);
    }
  }

  // Fetch streams by audio id within a time range
  async findOneById(id: string, timeRangeDto: TimeRangeDTO) {
    // Create cache key
    const cacheKey = `streams:${id}:${timeRangeDto.timeRange}`;

    // Check if data exists in cache
    const cachedData = await this.cacheService.get(cacheKey);

    // If data exists in cache, return it
    if (cachedData) {
      return JSON.parse(cachedData);
    }

    const { startDate, endDate } = this.calculateDateRange(timeRangeDto);

    const streams = await this.fetchStreamsByAudioId(id, startDate, endDate);
    const groupedStreams = this.groupStreamsByDsp(streams);

    // Store data in cache
    await this.cacheService.set(cacheKey, JSON.stringify(groupedStreams));

    return groupedStreams;
  }

  // Fetch streams for a user’s audios in a time range
  async findAllStreamsByUserId(userId: string, timeRangeDto: TimeRangeDTO) {
    // Create cache key
    const cacheKey = `streams:${userId}:${timeRangeDto.timeRange}`;

    // Check if data exists in cache
    const cachedData = await this.cacheService.get(cacheKey);

    // If data exists in cache, return it
    if (cachedData) {
      return JSON.parse(cachedData);
    }
    const { startDate, endDate } = this.calculateDateRange(timeRangeDto);

    const audioIds = await this.fetchUserAudioIds(userId);
    if (audioIds.length === 0) return [];

    const streams = await this.fetchStreamsForAudioIds(
      audioIds,
      startDate,
      endDate,
    );

    const groupedStreams = this.groupAndFormatStreamsByDsp(streams);

    // Store data in cache
    await this.cacheService.set(cacheKey, JSON.stringify(groupedStreams));

    return groupedStreams;
  }

  // Fetch all streams by audio ID for a user
  async findAllByAudioStreams(userId: string) {
    // Create cache key
    const cacheKey = `streams:${userId}`;

    // Check if data exists in cache
    const cachedData = await this.cacheService.get(cacheKey);

    // If data exists in cache, return it
    if (cachedData) {
      return JSON.parse(cachedData);
    }

    const audios = await this.fetchUserAudios(userId);
    const audioMap = this.createAudioMap(audios);
    const audioIds = audios.map((audio) => audio.id);

    if (audioIds.length === 0) return [];

    const streams = await this.fetchAudioStreams(audioIds);

    const totalStreamsByAudioId = this.aggregateStreams(streams, audioMap);

    // Store data in cache
    await this.cacheService.set(
      cacheKey,
      JSON.stringify(totalStreamsByAudioId),
    );

    return totalStreamsByAudioId;
  }

  // Extract DSP keys from incoming data
  private extractDspKeys(CreateStreamDTO: CreateStreamsDTO): string[] {
    return CreateStreamDTO.data.map((dsp) => dsp.key);
  }

  // Fetch DSP platforms and map names to platform IDs
  private async fetchDspPlatformMap(
    dspKeys: string[],
  ): Promise<Map<string, string>> {
    const platforms = await this.prisma.dSP.findMany({
      where: { name: { in: dspKeys } },
    });
    return new Map(platforms.map((platform) => [platform.name, platform.id]));
  }

  // Prepare the stream data for bulk insertion
  private prepareStreamsData(
    CreateStreamDTO: CreateStreamsDTO,
    platformMap: Map<string, string>,
  ) {
    const streamsData = [];

    for (const dsp of CreateStreamDTO.data) {
      const platformId = platformMap.get(dsp.key);
      if (platformId) {
        for (const series of dsp.series) {
          streamsData.push({
            total: series.total,
            date: new Date(series.date),
            dspId: platformId,
            audioId: CreateStreamDTO.audioId,
          });
        }
      }
    }

    return streamsData;
  }

  // Bulk insert streams
  private async insertStreamsData(streamsData: any[]) {
    if (streamsData.length > 0) {
      await this.prisma.streams.createMany({ data: streamsData });
    }
  }

  // Centralized error handling
  private handleError(error: any) {
    if (error instanceof PrismaClientKnownRequestError) {
      return {
        error: 'Error inserting stream data',
        message: 'Unique constraint failed on the database',
      };
    }
    throw error; // Rethrow if not handled
  }

  // Calculate start and end date based on time range
  private calculateDateRange(timeRangeDto: TimeRangeDTO): {
    startDate: Date;
    endDate: Date;
  } {
    const today = new Date();
    const endDate = new Date(today); // End date is today

    const startDate = new Date(today);
    switch (timeRangeDto.timeRange) {
      case '7days':
        startDate.setDate(today.getDate() - 10);
        break;
      case '14days':
        startDate.setDate(today.getDate() - 17);
        break;
      case '30days':
        startDate.setDate(today.getDate() - 33);
        break;
      case 'all':
        startDate.setDate(today.getDate() - 365);
        break;
      default:
        startDate.setDate(today.getDate() - 365);
        break;
    }
    return { startDate, endDate };
  }

  // Fetch streams by audio ID within a date range
  private async fetchStreamsByAudioId(
    audioId: string,
    startDate: Date,
    endDate: Date,
  ) {
    return await this.prisma.streams.findMany({
      where: {
        audioId,
        AND: [
          { date: { gte: startDate.toISOString() } },
          { date: { lte: endDate.toISOString() } },
        ],
      },
      select: {
        total: true,
        date: true,
        dsp: {
          select: { name: true },
        },
      },
    });
  }

  // Group streams by DSP name
  private groupStreamsByDsp(streams: any[]) {
    const groupedData: Record<string, { total: number; date: Date }[]> = {};

    for (const stream of streams) {
      const { name } = stream.dsp;
      if (!groupedData[name]) groupedData[name] = [];
      groupedData[name].push({ total: stream.total, date: stream.date });
    }

    return groupedData;
  }

  // Fetch audio IDs for a user
  private async fetchUserAudioIds(userId: string) {
    const audios = await this.prisma.audio.findMany({
      where: { userId },
      select: { id: true },
    });
    return audios.map((audio) => audio.id);
  }

  // Fetch streams for multiple audio IDs within a date range
  private async fetchStreamsForAudioIds(
    audioIds: string[],
    startDate: Date,
    endDate: Date,
  ) {
    return await this.prisma.streams.findMany({
      where: {
        audioId: { in: audioIds },
        AND: [
          { date: { gte: startDate.toISOString() } },
          { date: { lte: endDate.toISOString() } },
        ],
      },
      select: {
        total: true,
        date: true,
        dsp: { select: { name: true } },
      },
    });
  }

  // Group and format streams by DSP and date
  private groupAndFormatStreamsByDsp(streams: any[]) {
    const groupedData: Record<string, Record<string, number>> = {};

    streams.forEach((record) => {
      const dspName = record.dsp.name;
      const date = record.date.toISOString().split('T')[0]; // Format date

      if (!groupedData[dspName]) groupedData[dspName] = {};
      groupedData[dspName][date] =
        (groupedData[dspName][date] || 0) + record.total;
    });

    const formattedResult: Record<string, { total: number; date: string }[]> =
      {};
    for (const dspName in groupedData) {
      formattedResult[dspName] = Object.entries(groupedData[dspName]).map(
        ([date, total]) => ({ total, date }),
      );
    }

    return formattedResult;
  }

  // Fetch audio records for a specific user
  private async fetchUserAudios(userId: string) {
    return await this.prisma.audio.findMany({
      where: { userId },
      select: {
        id: true,
        title: true,
        releaseCover: true,
      },
    });
  }

  // Create a mapping of audio ID to title and cover
  private createAudioMap(
    audios: Array<{ id: string; title: string; releaseCover: string }>,
  ) {
    return audios.reduce(
      (map, audio) => {
        map[audio.id] = { title: audio.title, cover: audio.releaseCover };
        return map;
      },
      {} as Record<string, { title: string; cover: string }>,
    );
  }

  // Fetch streams for the specified audio IDs
  private async fetchAudioStreams(audioIds: string[]) {
    return await this.prisma.streams.findMany({
      where: { audioId: { in: audioIds } },
      orderBy: { date: 'asc' },
      include: {
        Audio: { select: { id: true, title: true } },
        dsp: { select: { name: true } },
      },
    });
  }

  // Aggregate streams and total them by audio ID
  private aggregateStreams(
    streams: any[],
    audioMap: Record<string, { title: string; cover: string }>,
  ) {
    const totalStreamsByAudioId: Record<
      string,
      { title: string; totalStreams: number; cover: string }
    > = {};

    streams.forEach((stream) => {
      const audioId = stream.Audio.id;
      if (!totalStreamsByAudioId[audioId]) {
        totalStreamsByAudioId[audioId] = {
          title: audioMap[audioId]?.title ?? '',
          cover: audioMap[audioId]?.cover ?? '',
          totalStreams: 0,
        };
      }
      totalStreamsByAudioId[audioId].totalStreams += stream.total;
    });

    return totalStreamsByAudioId;
  }
}
