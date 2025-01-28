import { Injectable } from '@nestjs/common';
import { PutObjectCommand, S3Client } from '@aws-sdk/client-s3';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AwsService {
  // Add service methods here
  private s3Client = new S3Client({
    region: this.configService.get('AWS_REGION'),
  });

  constructor(private configService: ConfigService) {}

  async uploadImageToS3(email: string, fileName: string, image: any) {
    const base64Data = Buffer.from(
      image.replace(/^data:image\/\w+;base64,/, ''),
      'base64',
    );
    await this.s3Client.send(
      new PutObjectCommand({
        Bucket: this.configService.get('AWS_BUCKET_NAME'),
        Key: `${email}/${fileName}`,
        Body: base64Data,
        ContentEncoding: 'base64',
        ContentType: 'image/jpeg',
        ACL: 'public-read',
      }),
    );

    return `https://${this.configService.get('AWS_BUCKET_NAME')}.s3.amazonaws.com/${email}/${fileName}`;
  }

  async uploadAudioToS3(email: string, fileName: string, audio: any) {
    const base64Data = Buffer.from(
      audio.replace(/^data:audio\/\w+;base64,/, ''),
      'base64',
    );
    await this.s3Client.send(
      new PutObjectCommand({
        Bucket: this.configService.get('AWS_BUCKET_NAME'),
        Key: `${email}/${fileName}`,
        Body: base64Data,
        ContentEncoding: 'base64',
        ContentType: 'audio/mpeg',
      }),
    );

    return `https://${this.configService.get('AWS_BUCKET_NAME')}.s3.amazonaws.com/${email}/${fileName}`;
  }
}
