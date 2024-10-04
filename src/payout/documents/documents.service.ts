import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
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
    private prismaService: PrismaService,
    private awsService: AwsService,
    private notificationService: IdentityService,
  ) {}

  async createDocument(documentDto: DocumentDTO) {
    const imageFileName = documentDto.imageFileName.split(' ').join('');
    const user = documentDto.user as unknown as User;
    console.log('documentDto', documentDto);

    const image = await this.awsService.uploadImageToS3(
      user.email,
      imageFileName + 'identity',
      documentDto.image,
    );

    console.log(image);

    const uploadedDocument = await this.prismaService.document.create({
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
