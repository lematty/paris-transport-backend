import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Agency } from './entities';

@Injectable()
export class BusService {
  // TODO: Uncomment when database connection established
  // constructor(@InjectRepository(Agency) private agencyRepository: Repository<Agency>) {}

  // getAll(): Promise<Agency[]> {
  //   return this.agencyRepository.find();
  // }
}
