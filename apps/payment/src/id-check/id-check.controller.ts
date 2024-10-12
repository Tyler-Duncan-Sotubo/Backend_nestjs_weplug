import { Controller } from '@nestjs/common';
import { IdCheckService } from './id-check.service';
import { IdCheckDTO, IDENTITY_PATTERN } from '@app/common/payment';
import { MessagePattern, Payload } from '@nestjs/microservices';

@Controller()
export class IdCheckController {
  constructor(private readonly idCheckService: IdCheckService) {}

  @MessagePattern(IDENTITY_PATTERN.CREATE)
  async createDocument(@Payload() dto: IdCheckDTO) {
    return this.idCheckService.createDocument(dto);
  }

  @MessagePattern(IDENTITY_PATTERN.FIND_ONE)
  async getDocumentStatus(@Payload() userId: string) {
    return this.idCheckService.getDocumentStatus(userId);
  }
}
