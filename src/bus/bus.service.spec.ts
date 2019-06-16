import { Test, TestingModule } from '@nestjs/testing';
import { BusService } from './bus.service';
import { Repository } from 'typeorm';

describe('BusService', () => {
  let service: BusService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        {
          provide: 'AgencyRepository',
          useClass: Repository,
        },
        {
          provide: 'CalendarDateRepository',
          useClass: Repository,
        },
        {
          provide: 'CalendarRepository',
          useClass: Repository,
        },
        {
          provide: 'RouteRepository',
          useClass: Repository,
        },
        {
          provide: 'StopTimeRepository',
          useClass: Repository,
        },
        {
          provide: 'StopRepository',
          useClass: Repository,
        },
        {
          provide: 'TransferRepository',
          useClass: Repository,
        },
        {
          provide: 'TripRepository',
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
