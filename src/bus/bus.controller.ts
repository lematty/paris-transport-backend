import { Controller, Get } from '@nestjs/common';
import { BusService } from './bus.service';

@Controller('bus')
export class BusController {

  constructor(private bus: BusService) {}

  // TODO: Uncomment when database connection established
  // @Get()
  // async getAgencies(): Promise<Agency[]> {
  //   return this.bus.getAll();
  // }
}
