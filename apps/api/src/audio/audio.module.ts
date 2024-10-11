import { Module } from '@nestjs/common';
import { ApiMusicController } from './music/api-music.controller';
import { ApiMusicService } from './music/api-music.service';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'AUDIO_SERVICE',
        transport: Transport.TCP,
        options: {
          port: 4001,
        },
      },
    ]),
  ],
  controllers: [ApiMusicController],
  providers: [ApiMusicService],
})
export class AudioModule {}
