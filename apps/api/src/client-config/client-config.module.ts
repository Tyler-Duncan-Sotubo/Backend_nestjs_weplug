import { Module } from '@nestjs/common';
import { ClientConfigService } from './client-config.service';
import { ConfigModule } from '@nestjs/config';
import * as joi from 'joi';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      validationSchema: joi.object({
        AUDIO_CLIENT_PORT: joi.number().default(4001),
        PAYMENT_CLIENT_PORT: joi.number().default(4002),
      }),
    }),
  ],
  exports: [ClientConfigService],
  providers: [ClientConfigService],
})
export class ClientConfigModule {}
