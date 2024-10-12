import { Injectable } from '@nestjs/common';
import { AwsService } from '@app/common/aws/aws.service';
import { PaymentPrismaService } from '../../database/prisma.service';
import { IdentityService } from '@app/common/mail/identity.service';
import { IdCheckDTO } from '@app/common/payment/';
import { CacheService } from '@app/common/cache/cache.service';

interface User {
  id: string;
  email: string;
}

@Injectable()
export class IdCheckService {
  constructor(
    private prisma: PaymentPrismaService,
    private awsService: AwsService,
    private notificationService: IdentityService,
    private cacheService: CacheService,
  ) {}

  async createDocument(dto: IdCheckDTO) {
    const imageFileName = dto.imageFileName.split(' ').join('');
    const user = dto.user as unknown as User;

    const image = await this.awsService.uploadImageToS3(
      user.email,
      dto.documentType + imageFileName,
      dto.image,
    );

    const uploadedDocument = await this.prisma.document.create({
      data: {
        userId: user.id,
        fileUrl: image,
      },
    });

    if (!uploadedDocument) {
      throw new Error('Document not uploaded');
    } else {
      await this.cacheService.del(`document-${user.id}`);

      // send email to user
      this.notificationService.sendIdentityVerificationEmail();

      return uploadedDocument;
    }
  }

  async getDocumentStatus(userId: string) {
    // cache key
    const cacheKey = `document-${userId}`;
    // check if document status is in cache
    const documentStatus = await this.cacheService.get(cacheKey);
    if (documentStatus) {
      JSON.parse(documentStatus);
    }
    const document = await this.prisma.document.findFirst({
      where: {
        userId,
      },
      select: {
        id: true,
      },
    });

    // store document status in cache
    await this.cacheService.set(cacheKey, JSON.stringify(document));

    return document;
  }
}
