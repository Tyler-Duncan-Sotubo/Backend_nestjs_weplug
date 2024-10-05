import { Injectable } from '@nestjs/common';
import { AwsService } from 'src/libs/aws/aws.service';
import { PrismaService } from 'src/database/prisma.service';
import { IdentityService } from 'src/libs/mail/identity.service';
import { IdCheckDTO } from './dto/id-check.dto';
import { CacheService } from 'src/cache/cache.service';

interface User {
  id: string;
  email: string;
}

@Injectable()
export class IdCheckService {
  constructor(
    private prisma: PrismaService,
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
      this.notificationService.sendIdentityVerificationEmail();
    }
  }

  async getDocumentStatus(userId: string) {
    // cache key
    const cacheKey = `document-${userId}`;

    // check if document status is in cache
    const documentStatus = await this.cacheService.get(cacheKey);
    if (documentStatus) {
      const status = JSON.parse(documentStatus);
      return [status];
    }

    const document = await this.prisma.document.findFirst({
      where: {
        userId,
      },
      select: {
        isVerified: true,
      },
    });

    // store document status in cache
    await this.cacheService.set(cacheKey, JSON.stringify(document));

    return [document];
  }
}
