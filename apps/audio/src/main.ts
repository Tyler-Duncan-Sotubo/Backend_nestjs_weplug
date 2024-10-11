import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { Transport, MicroserviceOptions } from '@nestjs/microservices';
import { AudioModule } from './audio.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AudioModule,
    {
      transport: Transport.TCP,
      options: {
        port: 4001,
      },
    },
  );
  app.useGlobalPipes(new ValidationPipe({ whitelist: true }));
  try {
    await app.listen();
    Logger.log('🚀 Audio microservice is listening on port 4001');
  } catch (error) {
    if (error.code === 'EADDRINUSE') {
      Logger.error(`Port 4001 is already in use.`);
    } else {
      Logger.error(`An error occurred: ${error.message}`);
    }
  }
}

bootstrap();
