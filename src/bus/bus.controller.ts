import { Controller, Get } from '@nestjs/common';
import { BusService } from './bus.service';
import { Agency, Calendar, CalendarDate, Route, StopTime, Stop, Transfer, Trip } from './entities';
import { ApiUseTags } from '@nestjs/swagger';

@ApiUseTags('bus')
@Controller('bus')
export class BusController {

  constructor(private bus: BusService) {}

  @Get('agencies')
  async getAllAgencies(): Promise<Agency[]> {
    return this.bus.getAllAgencies();
  }

  @Get('calendars')
  async getAllCalendars(): Promise<Calendar[]> {
    return this.bus.getAllCalendars();
  }

  @Get('calendar-dates')
  async getAllCalendarDates(): Promise<CalendarDate[]> {
    return this.bus.getAllCalendarDates();
  }

  @Get('routes')
  async getAllRoutes(): Promise<Route[]> {
    return this.bus.getAllRoutes();
  }

  @Get('stop-times')
  async getAllStopTimes(): Promise<StopTime[]> {
    return this.bus.getAllStopTimes();
  }

  @Get('stops')
  async getAllStops(): Promise<Stop[]> {
    return this.bus.getAllStops();
  }

  @Get('transfer')
  async getAllTransfers(): Promise<Transfer[]> {
    return this.bus.getAllTransfers();
  }

  @Get('trips')
  async getAllTrips(): Promise<Trip[]> {
    return this.bus.getAllTrips();
  }
}
