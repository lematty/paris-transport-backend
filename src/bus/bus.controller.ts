import { Controller, Get, Param } from '@nestjs/common';
import { BusService } from './bus.service';
import { Calendar, CalendarDates, Routes, StopTimes, Stops, Transfers, Trips } from './entities';
import { ApiUseTags } from '@nestjs/swagger';

@ApiUseTags('bus')
@Controller('bus')
export class BusController {

  constructor(private bus: BusService) {}

  @Get('calendars')
  async getAllCalendars(): Promise<Calendar[]> {
    return this.bus.getAllCalendars();
  }

  @Get('calendar-dates')
  async getAllCalendarDates(): Promise<CalendarDates[]> {
    return this.bus.getAllCalendarDates();
  }

  @Get('routes')
  async getAllRoutes(): Promise<Routes[]> {
    return this.bus.getAllRoutes();
  }

  @Get('stop-times')
  async getAllStopTimes(): Promise<StopTimes[]> {
    return this.bus.getAllStopTimes();
  }

  @Get('stops')
  async getAllStops(): Promise<Stops[]> {
    return this.bus.getAllStops();
  }

  @Get('transfer')
  async getAllTransfers(): Promise<Transfers[]> {
    return this.bus.getAllTransfers();
  }

  @Get('trips')
  async getAllTrips(): Promise<Trips[]> {
    return this.bus.getAllTrips();
  }
}
