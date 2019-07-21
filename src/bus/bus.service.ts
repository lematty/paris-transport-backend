import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Calendar, CalendarDates, Routes, StopTimes, Stops, Transfers, Trips } from './entities';
import { FeatureCollection } from 'geojson';
import { GeojsonBuilder } from '../utils/geojson-builder';

@Injectable()
export class BusService {

  constructor(
    private geojson: GeojsonBuilder,
    @InjectRepository(CalendarDates) private calendarDatesRepository: Repository<CalendarDates>,
    @InjectRepository(Calendar) private calendarRepository: Repository<Calendar>,
    @InjectRepository(Routes) private routesRepository: Repository<Routes>,
    @InjectRepository(StopTimes) private stopTimesRepository: Repository<StopTimes>,
    @InjectRepository(Stops) private stopsRepository: Repository<Stops>,
    @InjectRepository(Transfers) private transfersRepository: Repository<Transfers>,
    @InjectRepository(Trips) private tripsRepository: Repository<Trips>,
    ) {}

  async getAllCalendarDates(): Promise<CalendarDates[]> {
    return this.calendarDatesRepository.find({ take: 20 });
  }

  async getAllCalendars(): Promise<Calendar[]> {
    return this.calendarRepository.find({ take: 20 });
  }

  async getAllRoutes(): Promise<Routes[]> {
    return this.routesRepository.find({ take: 20 });
  }

  getAllStopTimes(): Promise<StopTimes[]> {
    return this.stopTimesRepository.find({ take: 20 });
  }

  async getAllStops(): Promise<Stops[]> {
    return this.stopsRepository.find({ take: 20 });
  }

  async getAllTransfers(): Promise<Transfers[]> {
    return this.transfersRepository.find({ take: 20 });
  }

  async getAllTrips(): Promise<Trips[]> {
    return this.tripsRepository.find({ take: 20 });
  }

  async getStationsByRouteId(routeId: string): Promise<FeatureCollection> {
    const route: Routes = await this.routesRepository.findOne(routeId);
    const trip: Trips = await this.tripsRepository.findOne({ route });
    const stopTimes = await this.stopTimesRepository.find({ relations: ['stop', 'trip'], where: { trip } });
    const stops = await Promise.all(stopTimes.map(async (stopTime: StopTimes) => {
      const stop = await this.stopsRepository.findOne({ stopId: stopTime.stop.stopId });
      return stop;
    }));
    return await this.geojson.formatGeoJson(stops, 'stations');
  }
}
