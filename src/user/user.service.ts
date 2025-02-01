import { Injectable } from '@nestjs/common';
import { CacheService } from 'config/cache/cache.service';
import { PrismaService } from 'database/prisma.service';
import { AwsService } from 'config/aws/aws.service';
import { UpdateProfilePhotoDto } from './dto';
import { CreateUserInfo } from './dto/create-user-info.dto';
import { UpdateUserInfo } from './dto/update-user-info.dto';

@Injectable()
export class UserService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly cache: CacheService,
    private readonly aws: AwsService,
  ) {}

  async getUserProfilePhoto(user_id: string) {
    const cacheKey = `photo-${user_id}`;
    try {
      return this.cache.getOrSetCache(cacheKey, async () => {
        const photo = this.prisma.user.findUnique({
          where: {
            id: user_id,
          },
          select: {
            image: true,
          },
        });

        if (!photo) {
          return null;
        }

        return photo;
      });
    } catch (error) {
      console.log(error);
      return null;
    }
  }

  async updateProfilePhoto(dto: UpdateProfilePhotoDto) {
    try {
      const imageFileName = dto.imageFileName.split(' ').join('');

      const imageLink = await this.aws.uploadImageToS3(
        dto.email,
        imageFileName,
        dto.image,
      );

      await this.prisma.user.update({
        where: {
          email: dto.email,
        },
        data: {
          image: imageLink,
        },
      });

      return {
        message: 'Image uploaded successfully',
      };
    } catch (error) {
      console.log(error);
      return null;
    }
  }

  async getUserInfo(user_id: string) {
    try {
      const userInfo = await this.prisma.userInformation.findFirst({
        where: {
          userId: user_id,
        },
        omit: {
          id: true,
          createdAt: true,
          updatedAt: true,
          userId: true,
        },
      });

      const userSocialUrls = await this.prisma.social.findFirst({
        where: {
          userId: user_id,
        },
        omit: {
          id: true,
          createdAt: true,
          updatedAt: true,
          userId: true,
        },
      });

      return { userInfo, userSocialUrls };
    } catch (error) {
      console.log(error);
      return null;
    }
  }

  async createUserInfo(dto: CreateUserInfo) {
    const {
      firstName,
      artistBio,
      lastName,
      artistName,
      label,
      phone,
      country,
      howDidYouHearAboutUs,
    } = dto;
    try {
      await this.prisma.userInformation.create({
        data: {
          firstName,
          artistBio,
          lastName,
          artistName,
          label,
          phone,
          country,
          howDidYouHearAboutUs,
          userId: dto.user_id,
        },
      });

      await this.prisma.social.create({
        data: {
          apple: dto.apple,
          spotify: dto.spotify,
          youtube: dto.youtube,
          instagram: dto.instagram,
          twitter: dto.twitter,
          facebook: dto.facebook,
          tiktok: dto.tiktok,
          soundcloud: dto.soundcloud,
          website: dto.website, //
          userId: dto.user_id,
        },
      });

      return {
        message: 'User information created successfully',
      };
    } catch (error) {
      console.log(error);
      return {
        message: 'Error Creating User Information',
      };
    }
  }

  async updateUserInfo(dto: UpdateUserInfo) {
    const {
      firstName,
      artistBio,
      lastName,
      artistName,
      label,
      phone,
      country,
      howDidYouHearAboutUs,
    } = dto;
    try {
      await this.prisma.userInformation.update({
        where: {
          userId: dto.user_id,
        },
        data: {
          firstName,
          artistBio,
          lastName,
          artistName,
          label,
          phone,
          country,
          howDidYouHearAboutUs,
        },
      });

      const socials = await this.prisma.social.findUnique({
        where: {
          userId: dto.user_id,
        },
      });

      if (socials) {
        await this.prisma.social.update({
          where: {
            userId: dto.user_id,
          },
          data: {
            apple: dto.apple,
            spotify: dto.spotify,
            youtube: dto.youtube,
            instagram: dto.instagram,
            twitter: dto.twitter,
            facebook: dto.facebook,
            tiktok: dto.tiktok,
            soundcloud: dto.soundcloud,
            website: dto.website, //
          },
        });
      } else {
        await this.prisma.social.create({
          data: {
            apple: dto.apple,
            spotify: dto.spotify,
            youtube: dto.youtube,
            instagram: dto.instagram,
            twitter: dto.twitter,
            facebook: dto.facebook,
            tiktok: dto.tiktok,
            soundcloud: dto.soundcloud,
            website: dto.website, //
            userId: dto.user_id,
          },
        });
      }

      return {
        message: 'User information created successfully',
      };
    } catch (error) {
      console.log(error);
      return {
        message: 'Error Creating User Information',
      };
    }
  }
}
