import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Agency, Calendar } from './entities';

@Injectable()
export class BusService {
  // TODO: Uncomment when database connection established
  constructor(
    @InjectRepository(Agency) private agencyRepository: Repository<Agency>,
    @InjectRepository(Calendar) private calendarRepository: Repository<Calendar>,
    ) {}

  getAllAgencies(): Promise<Agency[]> {
    return this.agencyRepository.find();
  }

  getAllCalendars(): Promise<Calendar[]> {
    return this.calendarRepository.find({ take: 20 });
  }
}
