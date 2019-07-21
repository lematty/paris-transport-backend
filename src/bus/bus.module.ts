import { Module } from '@nestjs/common';
import { BusController } from './bus.controller';
import { BusService } from './bus.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Calendar, CalendarDates, Routes, Stops, StopTimes, Transfers, Trips } from './entities';
import { GeojsonBuilder } from '../utils/geojson-builder';

@Module({
  imports: [TypeOrmModule.forFeature([
    CalendarDates,
    Calendar,
    Routes,
    StopTimes,
    Stops,
    Transfers,
    Trips,
  ])],
  controllers: [BusController],
  providers: [BusService, GeojsonBuilder],
})
export class BusModule {}
