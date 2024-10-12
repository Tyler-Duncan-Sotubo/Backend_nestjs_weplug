export const mockAudioRelease = {
  user: {},
  title: '',
  artist: '',
  primaryGenre: '',
  secondaryGenre: '',
  language: '',
  releaseDate: '',
  label: '',
  copyrightHolder: '',
  copyrightYear: '',
  productionHolder: '',
  productionYear: '',
  releaseCover: '',
  releaseAudio: '',
  releaseAudioLink: '',
  lyrics: '',
  imageFileName: 'image name.jpg',
  audioFileName: 'audio name.mp3',
};

export const mockUser = {
  id: '1',
  name: 'John Doe',
  email: 'test@test.com',
  hash: '',
  email_verified: true,
  hashedRefreshToken: '',
  emailVerificationToken: '',
  emailVerificationTokenExpiration: new Date(),
  role: '',
};

export const MockUpdateAudio = {
  status: '',
  UPC: '',
  smartLink: '',
  ISRC: '',
  releaseAudioLink: '',
};

export const mockUserReleases = [{ ...mockAudioRelease }];
