import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Agency } from './entities';

@Injectable()
export class BusService {

  // constructor(@InjectRepository(Agency) private agencyRepository: Repository<Agency>) {}

  // getAll(): Promise<Agency[]> {
  //   return this.agencyRepository.find();
  // }
}
