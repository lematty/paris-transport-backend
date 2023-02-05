import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FindOneOptions, Repository } from 'typeorm';
import { Agency, Calendar, CalendarDates, Routes, StopTimes, Stops, Transfers, Trips } from '../entities';
import { FeatureCollection } from 'geojson';
import { GeojsonBuilder } from '../utils/geojson-builder';
import { AgencyName } from '../models/agency';

@Injectable()
export class TransportService {

  constructor(
    private geojson: GeojsonBuilder,
    @InjectRepository(Agency) private agencyRepository: Repository<Agency>,
    @InjectRepository(CalendarDates) private calendarDatesRepository: Repository<CalendarDates>,
    @InjectRepository(Calendar) private calendarRepository: Repository<Calendar>,
    @InjectRepository(Routes) private routesRepository: Repository<Routes>,
    @InjectRepository(StopTimes) private stopTimesRepository: Repository<StopTimes>,
    @InjectRepository(Stops) private stopsRepository: Repository<Stops>,
    @InjectRepository(Transfers) private transfersRepository: Repository<Transfers>,
    @InjectRepository(Trips) private tripsRepository: Repository<Trips>,
    ) {}

  async getAllAgencies(): Promise<Agency[]> {
    return this.agencyRepository.find();
  }

  async getAllCalendarDates(): Promise<CalendarDates[]> {
    return this.calendarDatesRepository.find({ take: 20 });
  }

  async getAllCalendars(): Promise<Calendar[]> {
    return this.calendarRepository.find({ take: 20 });
  }

  async getRoutesByAgency(agencyName: AgencyName): Promise<Routes[]> {
    const agencyId = AgencyName[agencyName];
    return this.routesRepository.query(`SELECT * FROM "routes" WHERE "agency_id" = '${agencyId}'`);
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

  // async getStationsByRouteId(routeId: string): Promise<FeatureCollection> {
  //   // const FindOneOptions: FindOneOptions = { }
  //   // const route: Routes = await this.routesRepository.getId(routeId);
  //   // const trip: Trips = await this.tripsRepository.findOne({ route });
  //   // const stopTimes = await this.stopTimesRepository.find({ relations: ['stop', 'trip'], where: { trip } });
  //   // const stops = await Promise.all(stopTimes.map(async (stopTime: StopTimes) => {
  //   //   const stop = await this.stopsRepository.findOne({ stopId: stopTime.stop.stopId });
  //   //   return stop;
  //   // }));
  //   // return await this.geojson.formatGeoJson(stops, 'stations');
  // }
}
