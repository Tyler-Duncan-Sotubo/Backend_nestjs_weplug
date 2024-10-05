import { Module } from '@nestjs/common';
import { DocumentsService } from './documents.service';
import { DocumentsController } from './documents.controller';
import { AwsService } from 'src/aws/aws.service';
import { PrismaService } from 'src/database/prisma.service';

@Module({
  providers: [DocumentsService, AwsService, PrismaService],
  controllers: [DocumentsController],
})
export class DocumentsModule {}
