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
      ],
    }).compile();

    controller = module.get<BusController>(BusController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
