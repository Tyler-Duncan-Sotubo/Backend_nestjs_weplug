import { Module } from '@nestjs/common';
import { SmartlinkService } from './smartlink.service';
import { SmartlinkController } from './smartlink.controller';
import { PrismaService } from 'database/prisma.service';

@Module({
  controllers: [SmartlinkController],
  providers: [SmartlinkService, PrismaService],
})
export class SmartlinkModule {}
