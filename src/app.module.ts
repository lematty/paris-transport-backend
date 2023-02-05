import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';
import { TransportController } from './controllers/transport.controller';
import { TransportService } from './services/transport.service';
import { GeojsonBuilder } from './utils/geojson-builder';
import {
  Agency,
  Calendar,
  CalendarDates,
  Pathways,
  Routes,
  StopExtensions,
  Stops,
  StopTimes,
  Transfers,
  Trips,
} from './entities';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      name: 'default',
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'paris-transport-username',
      password: 'paris-transport-password',
      database: 'paristransport',
      schema: 'public',
      autoLoadEntities: true,
      synchronize: false,
    }), // takes database config from ormconfig.json (dunno anymore after upgrade)
    TypeOrmModule.forFeature([
      Agency,
      Calendar,
      CalendarDates,
      Pathways,
      Routes,
      StopExtensions,
      Stops,
      StopTimes,
      Transfers,
      Trips,
    ])
  ],
  controllers: [TransportController],
  providers: [TransportService, GeojsonBuilder],
  exports: [],
})
export class AppModule {
  constructor(private readonly connection: Connection) {}
}
