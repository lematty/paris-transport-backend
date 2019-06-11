import { Module } from '@nestjs/common';
import { BusController } from './bus.controller';
import { BusService } from './bus.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Agency, Calendar } from './entities';

@Module({
  imports: [TypeOrmModule.forFeature([
    Agency,
    Calendar,
  ])],
  controllers: [BusController],
  providers: [BusService],
})
export class BusModule {}
