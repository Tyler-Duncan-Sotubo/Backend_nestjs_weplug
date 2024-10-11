import { Global, Module } from '@nestjs/common';
import { MusicReleaseService } from './musicRelease.service';
import { NotificationService } from './notification.service';
import { IdentityService } from './identity.service';

@Global()
@Module({
  providers: [MusicReleaseService, NotificationService, IdentityService],
  exports: [MusicReleaseService, NotificationService, IdentityService],
})
export class MailModule {}
