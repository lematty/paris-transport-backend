import { Test, TestingModule } from '@nestjs/testing';
import { BusController } from './bus.controller';
import { Repository } from 'typeorm';
import { BusService } from './bus.service';

describe('Bus Controller', () => {
  let controller: BusController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BusController],
      providers: [
        {
          provide: BusService,
          useClass: Repository,
        },
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
      ],
    }).compile();

    controller = module.get<BusController>(BusController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
