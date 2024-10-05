import { Injectable } from '@nestjs/common';
import { PaymentPrismaService } from 'src/database/payment-prisma.service';
import { DocumentDTO } from './dto/document.dto';
import { AwsService } from 'src/aws/aws.service';
import { IdentityService } from 'src/mail/identity.service';

interface User {
  id: string;
  email: string;
}

@Injectable()
export class DocumentsService {
  constructor(
    private prisma: PaymentPrismaService,
    private awsService: AwsService,
    private notificationService: IdentityService,
  ) {}

  async createDocument(documentDto: DocumentDTO) {
    const imageFileName = documentDto.imageFileName.split(' ').join('');
    const user = documentDto.user as unknown as User;

    const image = await this.awsService.uploadImageToS3(
      user.email,
      imageFileName + documentDto.documentType,
      documentDto.image,
    );

    const uploadedDocument = await this.prisma.document.create({
      data: {
        userId: user.id,
        fileUrl: image,
      },
    });

    console.log(uploadedDocument);

    if (!uploadedDocument) {
      throw new Error('Document not uploaded');
    } else {
      this.notificationService.sendIdentityVerificationEmail();
    }
  }
}
