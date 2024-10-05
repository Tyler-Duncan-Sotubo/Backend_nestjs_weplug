import { Module } from '@nestjs/common';
import { StreamsService } from './services/streams.service';
import { StreamsController } from './streams.controller';
import { CountryService } from './services/country.service';
import { AudioPrismaService } from 'src/database/audio-prisma.service';

@Module({
  controllers: [StreamsController],
  providers: [StreamsService, CountryService, AudioPrismaService],
})
export class StreamsModule {}
