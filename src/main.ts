import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as bodyParser from 'body-parser';
import { ConfigService } from '@nestjs/config';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const configService = app.get<ConfigService>(ConfigService);
  app.use(bodyParser.json({ limit: '100mb' }));
  app.use(bodyParser.urlencoded({ limit: '100mb', extended: true }));

  // Retrieve CLIENT_URL and ADMIN_URL from environment or config service
  const clientUrl = configService.get<string>('CLIENT_URL');
  const adminUrl = configService.get<string>('ADMIN_URL');

  const allowedOrigins = [clientUrl, adminUrl].filter(Boolean);

  // Enable CORS for specific origins
  app.enableCors({
    origin: (origin, callback) => {
      if (!origin || allowedOrigins.indexOf(origin) !== -1) {
        callback(null, true); // Allow the request
      } else {
        callback(new Error('Not allowed by CORS')); // Reject the request
      }
    },
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
    credentials: true,
  });

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
    }),
  );

  await app.listen(8080);
}
bootstrap();
