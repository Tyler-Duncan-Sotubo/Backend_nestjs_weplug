import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { PrismaService } from 'database/prisma.service';
import { CacheService } from 'config/cache/cache.service';
import { AwsService } from 'config/aws/aws.service';
import { CacheModule } from 'config/cache/cache.module';

@Module({
  imports: [CacheModule],
  controllers: [UserController],
  providers: [UserService, PrismaService, CacheService, AwsService],
})
export class UserModule {}
