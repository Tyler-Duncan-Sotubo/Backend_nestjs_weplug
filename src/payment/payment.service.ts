import { Injectable } from '@nestjs/common';
import { CacheService } from 'config/cache/cache.service';
import { AwsService } from 'config/aws/aws.service';
import { PrismaService } from 'database/prisma.service';
import { IdentityService } from 'config/mail/identity.service';
import { IdCheckDTO, OrderDto, PayPalDto } from './dto';
import fetch from 'node-fetch';
import { ConfigService } from '@nestjs/config';

type AccessToken = {
  access_token: string;
};

interface User {
  id: string;
  email: string;
}

@Injectable()
export class PaymentService {
  private PAYPAL_CLIENT_ID = this.configService.get('PAYPAL_CLIENT_ID');
  private PAYPAL_CLIENT_SECRET = this.configService.get('PAYPAL_CLIENT_SECRET');
  private base = this.configService.get('PAYPAL_BASE');

  constructor(
    private prisma: PrismaService,
    private awsService: AwsService,
    private notificationService: IdentityService,
    private cacheService: CacheService,
    private configService: ConfigService,
  ) {}

  async accumulateEarningsForUser(userId: string) {
    // Cache key for monthly reports from Audio service
    const cacheKey = `monthly-report-${userId}`;
    // Fetch monthly reports from cache
    const months = await this.cacheService.get(cacheKey);
    const monthlyReports = JSON.parse(months);

    // Cache keys for total earnings and monthly reports
    const cacheKeyTotalEarnings = `user:${userId}:totalEarnings`;
    const cacheKeyMonthlyReports = `user:${userId}:monthlyReports`;

    // Check if cached data exists for both total earnings and monthly reports
    const cachedEarnings = await this.cacheService.get(cacheKeyTotalEarnings);
    const cachedMonthlyReports = await this.cacheService.get(
      cacheKeyMonthlyReports,
    );

    // If cached data exists, return it
    if (cachedEarnings && cachedMonthlyReports) {
      const totalEarnings = JSON.parse(cachedEarnings);
      const aggregatedMonthlyReports = JSON.parse(cachedMonthlyReports);
      return {
        message: 'Returning cached earnings and monthly reports.',
        earnings: totalEarnings,
        monthlyReports: aggregatedMonthlyReports,
      };
    }

    if (!monthlyReports || monthlyReports.length === 0) {
      return { message: 'No audio reports found for this user.', earnings: 0 };
    }

    // Process and aggregate the user's monthly reports
    const aggregatedMonthlyReports = await this.processAudioReports(
      userId,
      monthlyReports,
    );

    // Calculate total accumulated earnings
    const totalEarnings = (await aggregatedMonthlyReports).reduce(
      (sum: number, report: any) => sum + report.earnings,
      0,
    );

    // Cache the results
    await this.cacheService.set(
      cacheKeyTotalEarnings,
      JSON.stringify(totalEarnings),
    );
    await this.cacheService.set(
      cacheKeyMonthlyReports,
      JSON.stringify(aggregatedMonthlyReports),
    );

    return {
      message: 'Earnings accumulated successfully.',
      earnings: totalEarnings,
      monthlyReports: aggregatedMonthlyReports,
    };
  }

  async processAudioReports(userId: string, monthlyReports: any[]) {
    const aggregatedMonthlyReports = this.aggregateMonthlyData(monthlyReports);
    return aggregatedMonthlyReports;
  }

  private aggregateMonthlyData(monthlyReports: any[]) {
    return monthlyReports.map((report) => ({
      month: report.month,
      year: report.year,
      earnings: report.earnings,
    }));
  }

  // Identity

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

  // Paypal
  async generateAccessToken() {
    try {
      if (!this.PAYPAL_CLIENT_ID || !this.PAYPAL_CLIENT_SECRET) {
        throw new Error('MISSING_API_CREDENTIALS');
      }
      const auth = Buffer.from(
        this.PAYPAL_CLIENT_ID + ':' + this.PAYPAL_CLIENT_SECRET,
      ).toString('base64');
      const response = await fetch(`${this.base}/v1/oauth2/token`, {
        method: 'POST',
        body: 'grant_type=client_credentials',
        headers: {
          Authorization: `Basic ${auth}`,
        },
      });

      const data = (await response.json()) as AccessToken;
      return data.access_token;
    } catch (error) {
      console.error('Failed to generate Access Token:', error);
    }
  }

  async createOrder(dto: PayPalDto) {
    const accessToken = await this.generateAccessToken();
    const url = `${this.base}/v2/checkout/orders`;
    const payload = {
      intent: 'CAPTURE',
      purchase_units: [
        {
          amount: {
            currency_code: 'USD',
            value: dto.price,
          },
          description: `${dto.product} - ${dto.description} - ${dto.customerID}`,
        },
      ],
    };

    const response = await fetch(url, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${accessToken}`,
      },
      method: 'POST',
      body: JSON.stringify(payload),
    });

    return this.handleResponse(response);
  }

  async captureOrder(orderID: OrderDto) {
    const accessToken = await this.generateAccessToken();
    const url = `${this.base}/v2/checkout/orders/${orderID.orderID}/capture`;

    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${accessToken}`,
      },
    });

    return this.handleResponse(response);
  }

  async handleResponse(response: any): Promise<any> {
    if (response.status === 201 || response.status === 200) {
      return await response.json();
    }

    const errorMessage = await response.text();
    throw new Error(errorMessage);
  }
}
