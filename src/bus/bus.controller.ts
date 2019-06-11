import { Controller, Get } from '@nestjs/common';
import { BusService } from './bus.service';
import { Agency, Calendar } from './entities';

@Controller('bus')
export class BusController {

  constructor(private bus: BusService) {}

  // TODO: Uncomment when database connection established
  @Get('agency')
  async getAllAgencies(): Promise<Agency[]> {
    return this.bus.getAllAgencies();
  }

  @Get('calendar')
  async getAllCalendars(): Promise<Calendar[]> {
    return this.bus.getAllCalendars();
  }
}
