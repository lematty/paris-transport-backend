import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BusModule } from './bus/bus.module';

@Module({
  imports: [
    BusModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
