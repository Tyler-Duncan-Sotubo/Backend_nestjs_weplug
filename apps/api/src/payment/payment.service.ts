import { Injectable, Inject } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { PAYMENT_CLIENT } from './constant';
import { IDENTITY_PATTERN, IdCheckDTO } from '@app/common/payment';

@Injectable()
export class ApiPaymentService {
  constructor(
    @Inject(PAYMENT_CLIENT) private readonly audioClient: ClientProxy,
  ) {}

  accumulateEarningsForUser(userId: string) {
    return this.audioClient.send('accumulate_earnings', userId);
  }

  async createIdentity(identityDto: IdCheckDTO) {
    return this.audioClient.send(IDENTITY_PATTERN.CREATE, identityDto);
  }

  getIdentityStatus(userId: string) {
    return this.audioClient.send(IDENTITY_PATTERN.FIND_ONE, userId);
  }
}
