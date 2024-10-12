import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { ClientOptions, Transport } from '@nestjs/microservices';

@Injectable()
export class ClientConfigService {
  constructor(private readonly config: ConfigService) {}

  getAudioClientPort(): number {
    return this.config.get('AUDIO_CLIENT_PORT');
  }

  getPaymentClientPort(): number {
    return this.config.get('PAYMENT_CLIENT_PORT');
  }

  getAudioClientOptions(): ClientOptions {
    return {
      transport: Transport.TCP,
      options: {
        port: this.getAudioClientPort(),
      },
    };
  }

  getPaymentClientOptions(): ClientOptions {
    return {
      transport: Transport.TCP,
      options: {
        port: this.getPaymentClientPort(),
      },
    };
  }
}
