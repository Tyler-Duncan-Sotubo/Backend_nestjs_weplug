import { Global, Module } from '@nestjs/common';
import { MusicReleaseService } from './musicRelease.service';
import { NotificationService } from './notification.service';
import { IdentityService } from './identity.service';
import { ConfigService } from '@nestjs/config';

@Global()
@Module({
  providers: [
    MusicReleaseService,
    NotificationService,
    IdentityService,
    ConfigService,
  ],
  exports: [MusicReleaseService, NotificationService, IdentityService],
})
export class MailModule {}
