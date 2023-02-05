import { Controller, Get, Param, Query } from '@nestjs/common';
import { TransportService } from '../services/transport.service';
import { Calendar, CalendarDates, Routes, StopTimes, Stops, Transfers, Trips } from '../entities';
import { ApiTags } from '@nestjs/swagger';
import { FeatureCollection } from 'geojson';
import { Agency } from '../entities/Agency';
import { AgencyName } from '../models/agency';

@ApiTags('transport')
@Controller('transport')
export class TransportController {

  constructor(private transport: TransportService) {}

  @Get('agency')
  async getAllAgencies(): Promise<Agency[]> {
    return this.transport.getAllAgencies();
  }

  @Get('agency/common')
  async getCommonAgencyNames(): Promise<string[]> {
    return Object.keys(AgencyName);
  }

  @Get('calendars')
  async getAllCalendars(): Promise<Calendar[]> {
    return this.transport.getAllCalendars();
  }

  @Get('calendar-dates')
  async getAllCalendarDates(): Promise<CalendarDates[]> {
    return this.transport.getAllCalendarDates();
  }

  @Get('routes/:agencyName')
  async getRoutesByAgency(@Param('agencyName') agencyName: AgencyName): Promise<Routes[]> {
    return this.transport.getRoutesByAgency(agencyName);
  }

  @Get('stop-times')
  async getAllStopTimes(): Promise<StopTimes[]> {
    return this.transport.getAllStopTimes();
  }

  @Get('stops')
  async getAllStops(): Promise<Stops[]> {
    return this.transport.getAllStops();
  }

  @Get('transfer')
  async getAllTransfers(): Promise<Transfers[]> {
    return this.transport.getAllTransfers();
  }

  @Get('trips')
  async getAllTrips(): Promise<Trips[]> {
    return this.transport.getAllTrips();
  }

  @Get('route/:id')
  async getStationsByRouteId(@Param('id') routeId): Promise<FeatureCollection> {
    // return this.transport.getStationsByRouteId(routeId);
    return [] as any;
  }
}
