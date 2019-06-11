import { Controller, Get } from '@nestjs/common';
import { BusService } from './bus.service';

@Controller('bus')
export class BusController {
  constructor(private bus: BusService) {}

  // @Get()
  // async getAgencies(): Promise<Agency[]> {
  //   return this.bus.getAll();
  // }

  @Get()
  async getAgencies(): Promise<any[]> {
    return [];
  }
}
