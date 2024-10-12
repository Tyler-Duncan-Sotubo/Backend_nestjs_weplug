import { Test, TestingModule } from '@nestjs/testing';
import { MusicService } from './../music.service';
import { AwsService } from '@app/common/aws/aws.service';
import { PrismaService } from '../../../database/prisma.service';
import { MusicReleaseService } from '@app/common/mail/musicRelease.service';
import { NotificationService } from '@app/common/mail/notification.service';
import { CacheService } from '@app/common/cache/cache.service';
import { mockAudioRelease } from './data'; // Mocked data

describe('MusicService', () => {
  let service: MusicService;

  // Mock PrismaService
  const mockPrismaService = {
    audio: {
      create: jest.fn(),
      findMany: jest.fn(),
      findUnique: jest.fn(),
      update: jest.fn(),
    },
    track: {
      create: jest.fn(),
    },
  };

  // Mock CacheService
  const mockCacheService = {
    get: jest.fn(),
    set: jest.fn(),
    del: jest.fn(),
  };

  // Mock AwsService
  const mockAwsService = {
    uploadImageToS3: jest.fn(),
    uploadAudioToS3: jest.fn(),
  };

  // Mock MusicReleaseService
  const mockMusicReleaseService = {
    sendMusicReleaseEmail: jest.fn(),
  };

  // Mock NotificationService
  const mockNotificationService = {
    sendMusicReleaseEmail: jest.fn(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        MusicService,
        { provide: PrismaService, useValue: mockPrismaService },
        { provide: AwsService, useValue: mockAwsService },
        { provide: MusicReleaseService, useValue: mockMusicReleaseService },
        { provide: NotificationService, useValue: mockNotificationService },
        { provide: CacheService, useValue: mockCacheService },
      ],
    }).compile();

    service = module.get<MusicService>(MusicService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('createAudioRelease', () => {
    it('should create an audio release and cache it', async () => {
      const user = { id: '1', name: 'Test User', email: 'test@example.com' };

      // Mock AWS S3 upload
      mockAwsService.uploadImageToS3.mockResolvedValue('imageUrl');
      mockAwsService.uploadAudioToS3.mockResolvedValue('audioUrl');

      // Mock Prisma create methods
      mockPrismaService.audio.create.mockResolvedValueOnce({
        id: 1,
        releaseAudio: 'audioUrl',
        releaseAudioLink: 'audioLink',
        ISRC: 'ISRC_CODE',
      });
      mockPrismaService.track.create.mockResolvedValueOnce({});

      // Call the service method
      const result = await service.createAudioRelease({
        ...mockAudioRelease,
        user,
      });

      // Assert the service's behavior
      expect(mockAwsService.uploadImageToS3).toHaveBeenCalledWith(
        user.email,
        expect.any(String),
        mockAudioRelease.releaseCover,
      );

      expect(mockPrismaService.audio.create).toHaveBeenCalled();
      expect(mockPrismaService.track.create).toHaveBeenCalled();
      expect(
        mockMusicReleaseService.sendMusicReleaseEmail,
      ).toHaveBeenCalledWith(user.email, user.name);
      expect(mockCacheService.del).toHaveBeenCalledWith(
        `audio-release-${user.id}`,
      );
      expect(result).toEqual('Audio Release Created');
    });
  });

  describe('getAudioReleasesByUserId', () => {
    it('should return cached audio releases if available', async () => {
      const cacheData = JSON.stringify([{ id: 1, title: 'Test Audio' }]);
      mockCacheService.get.mockResolvedValueOnce(cacheData);

      const result = await service.getAudioReleasesByUserId({ userId: '1' });

      expect(mockCacheService.get).toHaveBeenCalledWith('audio-release-1');
      expect(result).toEqual(JSON.parse(cacheData));
    });

    it('should fetch from database if cache is empty', async () => {
      mockCacheService.get.mockResolvedValueOnce(null); // No cache
      const audioReleases = [{ id: 1, title: 'Test Audio' }];
      mockPrismaService.audio.findMany.mockResolvedValueOnce(audioReleases);

      const result = await service.getAudioReleasesByUserId({ userId: '1' });

      expect(mockCacheService.get).toHaveBeenCalledWith('audio-release-1');
      expect(mockPrismaService.audio.findMany).toHaveBeenCalled();
      expect(mockCacheService.set).toHaveBeenCalledWith(
        'audio-release-1',
        JSON.stringify(audioReleases),
      );
      expect(result).toEqual(audioReleases);
    });
  });

  // Other tests for getAudioReleaseById, getAllAudio, updateAudioById, etc.
});
