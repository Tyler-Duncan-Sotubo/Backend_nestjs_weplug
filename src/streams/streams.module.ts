import { Module } from '@nestjs/common';
import { StreamsService } from './services/streams.service';
import { StreamsController } from './streams.controller';
import { CountryService } from './services/country.service';

@Module({
  controllers: [StreamsController],
  providers: [StreamsService, CountryService],
})
export class StreamsModule {}
