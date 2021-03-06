import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BusModule } from './bus/bus.module';
import { Connection } from 'typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot(), // takes database config from ormconfig.json
    BusModule,
  ],
  controllers: [],
  providers: [],
  exports: [BusModule],
})
export class AppModule {
  constructor(private readonly connection: Connection) {}
}
