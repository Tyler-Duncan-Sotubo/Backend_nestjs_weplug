import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { DocumentsService } from './documents.service';
import { DocumentDTO } from './dto/document.dto';

@Controller('api/verify-document')
export class DocumentsController {
  constructor(private readonly document: DocumentsService) {}

  @HttpCode(HttpStatus.CREATED)
  @Post()
  async createDocument(@Body() documentDto: DocumentDTO) {
    return this.document.createDocument(documentDto);
  }
}
