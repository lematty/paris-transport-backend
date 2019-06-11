import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Agency, Calendar, CalendarDate, Route, StopTime, Stop, Transfer, Trip } from './entities';

@Injectable()
export class BusService {

  constructor(
    @InjectRepository(Agency) private agencyRepository: Repository<Agency>,
    @InjectRepository(Calendar) private calendarRepository: Repository<Calendar>,
    @InjectRepository(CalendarDate) private calendarDateRepository: Repository<CalendarDate>,
    @InjectRepository(Route) private routeRepository: Repository<Route>,
    @InjectRepository(StopTime) private stopTimeRepository: Repository<StopTime>,
    @InjectRepository(Stop) private stopRepository: Repository<Stop>,
    @InjectRepository(Transfer) private transferRepository: Repository<Transfer>,
    @InjectRepository(Trip) private tripRepository: Repository<Trip>,
    ) {}

  getAllAgencies(): Promise<Agency[]> {
    return this.agencyRepository.find();
  }

  getAllCalendars(): Promise<Calendar[]> {
    return this.calendarRepository.find({ take: 20 });
  }

  getAllCalendarDates(): Promise<CalendarDate[]> {
    return this.calendarDateRepository.find({ take: 20 });
  }

  getAllRoutes(): Promise<Route[]> {
    return this.routeRepository.find({ take: 20 });
  }

  getAllStopTimes(): Promise<StopTime[]> {
    return this.stopTimeRepository.find({ take: 20 });
  }

  getAllStops(): Promise<Stop[]> {
    return this.stopRepository.find({ take: 20 });
  }

  getAllTransfers(): Promise<Transfer[]> {
    return this.transferRepository.find({ take: 20 });
  }

  getAllTrips(): Promise<Trip[]> {
    return this.tripRepository.find({ take: 20 });
  }
}
