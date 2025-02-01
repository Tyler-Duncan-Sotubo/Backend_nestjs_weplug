import { Controller, Get } from '@nestjs/common';
import { SmartlinkService } from './smartlink.service';

@Controller('api')
export class SmartlinkController {
  constructor(private readonly smartlinkService: SmartlinkService) {}

  @Get('smartlink')
  async getAllSmartLinks() {
    return this.smartlinkService.getSmartLinks();
  }
}
