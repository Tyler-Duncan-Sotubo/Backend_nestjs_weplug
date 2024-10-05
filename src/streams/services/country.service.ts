import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { CreateStreamsDTO } from '../dto/create-stream.dto';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library';

@Injectable()
export class CountryService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createStreamDto: CreateStreamsDTO) {
    try {
      const countryKeys = this.extractDspKeys(createStreamDto);

      const countryMap = await this.fetchCountryMap(countryKeys);

      const streamsData = this.prepareStreamsData(createStreamDto, countryMap);

      await this.insertStreamsData(streamsData);
      return 'All country streams inserted successfully!';
    } catch (error) {
      this.handleError(error);
    }
  }

  async findAllCountryStreamsByUserId(userId: string) {
    const audioIds = await this.fetchUserAudioIds(userId);

    if (audioIds.length === 0) return [];

    const streams = await this.fetchStreamsForAudioIds(audioIds);

    return this.groupAndFormatStreamsByCountry(streams);
  }

  // Extract country keys from incoming data
  private extractDspKeys(CreateStreamDTO: CreateStreamsDTO): string[] {
    return CreateStreamDTO.data.map((country) => country.key);
  }

  // Fetch the country Id and Name for a given list
  private async fetchCountryMap(
    countryKeys: string[],
  ): Promise<Map<string, string>> {
    // Filter out "unknown" from the countryKeys
    const filteredKeys = countryKeys.filter((key) => key !== 'unknown');

    // Fetch countries from the database that are in the filtered keys
    const countries = await this.prisma.country.findMany({
      where: { name: { in: filteredKeys } },
    });

    // Create a map from country names to their IDs
    return new Map(countries.map((country) => [country.name, country.id]));
  }

  // Prepare the stream data for bulk insertion
  private prepareStreamsData(
    CreateStreamDTO: CreateStreamsDTO,
    countryMap: Map<string, string>,
  ) {
    const streamsData = [];

    for (const dsp of CreateStreamDTO.data) {
      const countryId = countryMap.get(dsp.key);
      if (countryId) {
        for (const series of dsp.series) {
          streamsData.push({
            total: series.total,
            date: new Date(series.date),
            countryId: countryId,
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
      await this.prisma.streamByCountry.createMany({
        data: streamsData,
      });
    }
  }

  // Centralized error handling
  private handleError(error: any) {
    if (error instanceof PrismaClientKnownRequestError) {
      if (error.code === 'P2002') {
        console.error('Unique constraint violation:', error.message);
      }
    }
    throw error; // Rethrow other errors if necessary
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
  private async fetchStreamsForAudioIds(audioIds: string[]) {
    return await this.prisma.streamByCountry.findMany({
      where: {
        audioId: { in: audioIds },
      },
      orderBy: { total: 'asc' },
      select: {
        total: true,
        date: true,
        country: { select: { name: true, isoCode: true } },
      },
    });
  }

  // Group and format streams by DSP and date
  private groupAndFormatStreamsByCountry(streams: any[]) {
    const groupedData = {};

    streams.forEach((record) => {
      const countryIsoCode = record.country.isoCode; // Use country isoCode as id
      const name = record.country.name; // Get country name

      // Initialize groupedData structure for the country if it doesn't exist
      if (!groupedData[countryIsoCode]) {
        groupedData[countryIsoCode] = {
          name,
          streams: 0, // Initialize total streams
        };
      }

      // Sum up total streams for the given country
      groupedData[countryIsoCode].streams += record.total;
    });

    // Format the result to the desired structure
    const formattedResult = [];
    for (const isoCode in groupedData) {
      const { name, streams } = groupedData[isoCode];
      formattedResult.push({
        id: isoCode,
        name,
        streams,
      });
    }

    return formattedResult;
  }
}
