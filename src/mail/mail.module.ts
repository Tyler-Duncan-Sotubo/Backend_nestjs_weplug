import { Global, Module } from '@nestjs/common';
import { MusicReleaseService } from './musicRelease.service';
import { NotificationService } from './notification.service';

@Global()
@Module({
  providers: [MusicReleaseService, NotificationService],
  exports: [MusicReleaseService, NotificationService],
})
export class MailModule {}
