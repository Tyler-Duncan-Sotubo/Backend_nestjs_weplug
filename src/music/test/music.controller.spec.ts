import { Test, TestingModule } from '@nestjs/testing';
import { MusicController } from './../music.controller';
import { MusicService } from './../music.service';
import { AudioReleaseDto, mockUserReleases, MockUpdateAudio } from './dummy';

describe('MyService', () => {
  let controller: MusicController;

  const mockMusicService = {
    createAudioRelease: jest.fn(),
    getAudioReleasesByUserId: jest.fn(() => {
      return mockUserReleases;
    }),
    getAllAudio: jest.fn(() => {
      return [];
    }),
    updateAudioById: jest.fn(() => {
      return mockUserReleases;
    }),
    getAudioById: jest.fn(() => {
      return mockUserReleases;
    }),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MusicController],
      providers: [{ provide: MusicService, useValue: mockMusicService }],
    }).compile();

    controller = module.get<MusicController>(MusicController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  //Create Audio Release
  it('should create an audio release', async () => {
    controller.createAudioRelease(AudioReleaseDto);
    expect(mockMusicService.createAudioRelease).toHaveBeenCalledWith(
      AudioReleaseDto,
    );
  });

  //Get Audio Releases by User ID
  it('should get audio releases by user ID', async () => {
    controller.getAudioReleases({ userId: '1' });
    expect(mockMusicService.getAudioReleasesByUserId).toHaveBeenCalledWith({
      userId: '1',
    });
  });

  // Fetch All Audio
  it('should fetch all audio', async () => {
    controller.fetchAll();
    expect(mockMusicService.getAllAudio).toHaveBeenCalled();
  });

  // Update Audio by ID
  it('should update an audio release by ID', async () => {
    controller.updateOneById('1', MockUpdateAudio);
    expect(mockMusicService.updateAudioById).toHaveBeenCalledWith(
      MockUpdateAudio,
      '1',
    );
  });

  // Get Audio by ID
  it('should get an audio release by ID', async () => {
    controller.getAudioById({ audioId: '1' });
    expect(mockMusicService.getAudioById).toHaveBeenCalledWith({
      audioId: '1',
    });
  });
});
