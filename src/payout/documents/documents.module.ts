import { Module } from '@nestjs/common';
import { DocumentsService } from './documents.service';
import { DocumentsController } from './documents.controller';
import { AwsService } from 'src/aws/aws.service';
import { PaymentPrismaService } from 'src/database/payment-prisma.service';

@Module({
  providers: [DocumentsService, AwsService, PaymentPrismaService],
  controllers: [DocumentsController],
})
export class DocumentsModule {}
