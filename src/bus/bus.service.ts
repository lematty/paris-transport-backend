import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Calendar, CalendarDates, Routes, StopTimes, Stops, Transfers, Trips } from './entities';

@Injectable()
export class BusService {

  constructor(
    @InjectRepository(CalendarDates) private calendarDateRepository: Repository<CalendarDates>,
    @InjectRepository(Calendar) private calendarRepository: Repository<Calendar>,
    @InjectRepository(Routes) private routeRepository: Repository<Routes>,
    @InjectRepository(StopTimes) private stopTimeRepository: Repository<StopTimes>,
    @InjectRepository(Stops) private stopRepository: Repository<Stops>,
    @InjectRepository(Transfers) private transferRepository: Repository<Transfers>,
    @InjectRepository(Trips) private tripRepository: Repository<Trips>,
    ) {}

  async getAllCalendarDates(): Promise<CalendarDates[]> {
    return this.calendarDateRepository.find({ take: 20 });
  }

  async getAllCalendars(): Promise<Calendar[]> {
    return this.calendarRepository.find({ take: 20 });
  }

  async getAllRoutes(): Promise<Routes[]> {
    return this.routeRepository.find({ take: 20 });
  }

  getAllStopTimes(): Promise<StopTimes[]> {
    return this.stopTimeRepository.find({ take: 20 });
  }

  async getAllStops(): Promise<Stops[]> {
    return this.stopRepository.find({ take: 20 });
  }

  async getAllTransfers(): Promise<Transfers[]> {
    return this.transferRepository.find({ take: 20 });
  }

  async getAllTrips(): Promise<Trips[]> {
    return this.tripRepository.find({ take: 20 });
  }
}
