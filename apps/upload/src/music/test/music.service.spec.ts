import { Test, TestingModule } from '@nestjs/testing';
import { MusicService } from '../../../../music/src/music.service';
import { AwsService } from '../../libs/aws/aws.service';
import { PrismaService } from '../../database/prisma.service';
import { MusicReleaseService } from '../../libs/mail/musicRelease.service';
import { NotificationService } from '../../libs/mail/notification.service';
import { ConfigService } from '@nestjs/config';
import { CacheService } from '../../cache/cache.service';
import { CacheModule } from '../../cache/cache.module';
import { AudioReleaseDto } from './dummy';

describe('MusicService', () => {
  let service: MusicService;

  const mockPrismaService = {
    audio: {
      create: jest.fn(), // Mock `create` method
    },
    track: {
      create: jest.fn(), // Mock `create` method for track
    },
  };

  const mockRedisCache = {
    get: jest.fn(),
    set: jest.fn(),
    del: jest.fn(),
  };

  const mockAwsService = {
    uploadImageToS3: jest.fn(),
    uploadAudioToS3: jest.fn(),
  };

  const mockMusicReleaseService = {
    sendMusicReleaseEmail: jest.fn(),
  };

  const mockNotificationService = {
    sendMusicReleaseEmail: jest.fn(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [CacheModule],
      providers: [
        MusicService,
        {
          provide: PrismaService,
          useValue: mockPrismaService, // Use the correct mock here
        },
        {
          provide: AwsService,
          useValue: mockAwsService,
        },
        {
          provide: MusicReleaseService,
          useValue: mockMusicReleaseService,
        },
        {
          provide: NotificationService,
          useValue: mockNotificationService,
        },
        {
          provide: CacheService,
          useValue: mockRedisCache,
        },
        ConfigService,
      ],
    }).compile();

    service = module.get<MusicService>(MusicService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should create an audio release', async () => {
    // Mocking Prisma audio.create and track.create methods
    const mockCreateAudio = jest
      .spyOn(mockPrismaService.audio, 'create')
      .mockResolvedValueOnce({
        id: 1,
        releaseAudio: null,
        releaseAudioLink: 'audioLink',
        ISRC: 'ISRC_CODE',
      });

    const mockCreateTrack = jest
      .spyOn(mockPrismaService.track, 'create')
      .mockResolvedValueOnce({});

    // Mocking AWS service methods
    const mockUploadImage = jest
      .spyOn(mockAwsService, 'uploadImageToS3')
      .mockResolvedValueOnce('imageUrl');

    // Call the method
    const result = await service.createAudioRelease(AudioReleaseDto);

    // Assertions
    expect(mockCreateAudio).toHaveBeenCalled();
    expect(mockCreateTrack).toHaveBeenCalled();
    expect(mockUploadImage).toHaveBeenCalled();

    expect(result).toEqual('Audio Release Created');
  });
});
