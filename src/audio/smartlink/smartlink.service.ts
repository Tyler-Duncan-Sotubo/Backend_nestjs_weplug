import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../../database/prisma.service';

@Injectable()
export class SmartlinkService {
  constructor(private readonly prisma: PrismaService) {}

  async getSmartLinks() {
    const smartLinks = await this.prisma.smartLink.findMany({
      take: 10,
      orderBy: {
        createdAt: 'desc', // Sort by the creation date
      },
    });
    return smartLinks;
  }
}
