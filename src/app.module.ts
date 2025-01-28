import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import * as Joi from 'joi';
import { AudioModule } from './audio/audio.module';
import { PaymentModule } from './payment/payment.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      validationSchema: Joi.object({
        DATABASE_URL: Joi.string().required(),
        SEND_GRID_API_KEY: Joi.string().required(),
        MUSIC_RELEASE_TEMPLATE_ID: Joi.string().required(),
        RELEASE_NOTIFICATION_TEMPLATE_ID: Joi.string().required(),
        IDENTITY_VERIFICATION_TEMPLATE_ID: Joi.string().required(),
        AWS_ACCESS_KEY_ID: Joi.string().required(),
        AWS_SECRET_ACCESS_KEY: Joi.string().required(),
        AWS_REGION: Joi.string().required(),
        AWS_BUCKET_NAME: Joi.string().required(),
        REDIS_HOST: Joi.string().required(),
        REDIS_PASSWORD: Joi.string().required(),
        REDIS_PORT: Joi.string().required(),
        CACHE_TTL: Joi.string().required(),
        PAYPAL_CLIENT_ID: Joi.string().required(),
        PAYPAL_CLIENT_SECRET: Joi.string().required(),
        PAYPAL_BASE: Joi.string().required(),
      }),
    }),
    AudioModule,
    PaymentModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
