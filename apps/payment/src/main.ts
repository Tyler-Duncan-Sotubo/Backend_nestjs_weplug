import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { Transport, MicroserviceOptions } from '@nestjs/microservices';
import { PaymentModule } from './payment.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    PaymentModule,
    {
      transport: Transport.TCP,
      options: {
        port: 4002,
      },
    },
  );
  app.useGlobalPipes(new ValidationPipe({ whitelist: true }));
  try {
    await app.listen();
    Logger.log('🚀 Payment microservice is listening on port 4002');
  } catch (error) {
    if (error.code === 'EADDRINUSE') {
      Logger.error(`Port 4002 is already in use.`);
    } else {
      Logger.error(`An error occurred: ${error.message}`);
    }
  }
}

bootstrap();
