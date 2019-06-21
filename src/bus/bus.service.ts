import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Agency, Calendar, CalendarDate, Route, StopTime, Stop, Transfer, Trip } from './entities';

@Injectable()
export class BusService {

  constructor(
    @InjectRepository(Agency) private agencyRepository: Repository<Agency>,
    @InjectRepository(CalendarDate) private calendarDateRepository: Repository<CalendarDate>,
    @InjectRepository(Calendar) private calendarRepository: Repository<Calendar>,
    @InjectRepository(Route) private routeRepository: Repository<Route>,
    @InjectRepository(StopTime) private stopTimeRepository: Repository<StopTime>,
    @InjectRepository(Stop) private stopRepository: Repository<Stop>,
    @InjectRepository(Transfer) private transferRepository: Repository<Transfer>,
    @InjectRepository(Trip) private tripRepository: Repository<Trip>,
    ) {}

  async getAllAgencies(): Promise<Agency[]> {
    return this.agencyRepository.find();
  }

  async getAllCalendarDates(): Promise<CalendarDate[]> {
    return this.calendarDateRepository.find({ take: 20 });
  }

  async getAllCalendars(): Promise<Calendar[]> {
    return this.calendarRepository.find({ take: 20 });
  }

  async getAllRoutes(): Promise<Route[]> {
    return this.routeRepository.find({ take: 20 });
  }

  getAllStopTimes(): Promise<StopTime[]> {
    return this.stopTimeRepository.find({ take: 20 });
  }

  async getAllStops(): Promise<Stop[]> {
    return this.stopRepository.find({ take: 20 });
  }

  async getAllTransfers(): Promise<Transfer[]> {
    return this.transferRepository.find({ take: 20 });
  }

  async getAllTrips(): Promise<Trip[]> {
    return this.tripRepository.find({ take: 20 });
  }

  async getStopTimesById(tripId: string): Promise<any> {
    const stopTimes = await this.stopTimeRepository.find({ tripId }) as StopTime[];
    const stations = await Promise.all(stopTimes.map(async (stopTime: StopTime) => {
      const station = await this.stopRepository.findOne(stopTime.stopId) as Stop;
      return station;
    }));
    return {
      tripId,
      stations,
    };
  }
}
