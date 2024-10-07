import { Test, TestingModule } from '@nestjs/testing';
import { MusicService } from './../music.service';
import { AwsService } from '../../libs/aws/aws.service';
import { PrismaService } from '../../database/prisma.service';
import { MusicReleaseService } from '../../libs/mail/musicRelease.service';
import { NotificationService } from '../../libs/mail/notification.service';
import { ConfigService } from '@nestjs/config';

describe('MusicService', () => {
  let service: MusicService;

  const MockPrisma = {
    audios: {
      create: () => Promise.resolve({}),
      findMany: () => Promise.resolve([]),
    },
    videos: {
      create: () => Promise.resolve({}),
      findMany: () => Promise.resolve([]),
    },
  };
  // const mockAwsService = {
  //   uploadImageToS3: jest.fn(),
  // };
  const mockMusicReleaseService = {
    sendMusicReleaseEmail: jest.fn(),
  };
  const mockNotificationService = {
    sendMusicReleaseEmail: jest.fn(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        MusicService,
        AwsService,
        ConfigService,
        {
          provide: PrismaService,
          useValue: MockPrisma,
        },
        {
          provide: MusicReleaseService,
          useValue: mockMusicReleaseService,
        },
        {
          provide: NotificationService,
          useValue: mockNotificationService,
        },
      ],
    }).compile();
    service = module.get<MusicService>(MusicService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  // Create Audio Release
  // it('should create an audio release', async () => {
  //   jest
  //     .spyOn(MockPrisma.audios, 'create')
  //     .mockResolvedValueOnce(AudioReleaseDto);
  //   jest.spyOn(mockAwsService, 'uploadImageToS3').mockResolvedValueOnce({});
  //   const result = await service.createAudioRelease(AudioReleaseDto);

  //   expect(result).toEqual('Audio Release Created');
  // });
});
