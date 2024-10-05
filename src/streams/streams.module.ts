import { Module } from '@nestjs/common';
import { StreamsService } from './services/streams.service';
import { StreamsController } from './streams.controller';
import { CountryService } from './services/country.service';
import { PrismaService } from 'src/database/prisma.service';

@Module({
  controllers: [StreamsController],
  providers: [StreamsService, CountryService, PrismaService],
})
export class StreamsModule {}
