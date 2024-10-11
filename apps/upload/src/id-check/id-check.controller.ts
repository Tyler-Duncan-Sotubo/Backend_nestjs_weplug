import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
} from '@nestjs/common';
import { IdCheckService } from './id-check.service';
import { IdCheckDTO } from './dto/id-check.dto';

@Controller('api/id-check')
export class IdCheckController {
  constructor(private readonly idCheckService: IdCheckService) {}

  @HttpCode(HttpStatus.CREATED)
  @Post()
  async createDocument(@Body() dto: IdCheckDTO) {
    return this.idCheckService.createDocument(dto);
  }

  @HttpCode(HttpStatus.OK)
  @Get('/:userId')
  async getDocumentStatus(@Param('userId') userId: string) {
    return this.idCheckService.getDocumentStatus(userId);
  }
}
