import { Module } from '@nestjs/common';
import { BusController } from './bus.controller';
import { BusService } from './bus.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Agency, Calendar, CalendarDate, Route, Stop, StopTime, Transfer, Trip } from './entities';

@Module({
  imports: [TypeOrmModule.forFeature([
    Agency,
    CalendarDate,
    Calendar,
    Route,
    StopTime,
    Stop,
    Transfer,
    Trip,
  ])],
  controllers: [BusController],
  providers: [BusService],
})
export class BusModule {}
