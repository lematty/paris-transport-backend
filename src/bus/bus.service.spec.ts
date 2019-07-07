import { Test, TestingModule } from '@nestjs/testing';
import { BusService } from './bus.service';
import { Repository } from 'typeorm';

describe('BusService', () => {
  let service: BusService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        {
          provide: 'CalendarDatesRepository',
          useClass: Repository,
        },
        {
          provide: 'CalendarRepository',
          useClass: Repository,
        },
        {
          provide: 'RoutesRepository',
          useClass: Repository,
        },
        {
          provide: 'StopTimesRepository',
          useClass: Repository,
        },
        {
          provide: 'StopsRepository',
          useClass: Repository,
        },
        {
          provide: 'TransfersRepository',
          useClass: Repository,
        },
        {
          provide: 'TripsRepository',
          useClass: Repository,
        },
        BusService,
      ],
    }).compile();

    service = module.get<BusService>(BusService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
