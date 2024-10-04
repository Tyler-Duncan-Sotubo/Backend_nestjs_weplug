import { Module } from '@nestjs/common';
import { DocumentsService } from './documents.service';
import { DocumentsController } from './documents.controller';
import { PrismaService } from 'src/prisma/prisma.service';
import { AwsService } from 'src/aws/aws.service';

@Module({
  providers: [DocumentsService, PrismaService, AwsService],
  controllers: [DocumentsController],
})
export class DocumentsModule {}
