import * as request from 'supertest';
import { Test } from '@nestjs/testing';
import { BusModule } from './../src/bus/bus.module';
import { BusService } from './../src/bus/bus.service';
import { INestApplication } from '@nestjs/common';

describe('Buses', () => {
  let app: INestApplication;
  let busService = { find: () => [{
    agencyId: '1',
    agencyName: 'Agency1',
    agencyUrl: 'http://url.com',
    agencyTimezone: '11/2/34',
    agencyLang: 'en-us',
    agencyPhone: '888-999-0000',
  }] };

  beforeAll(async () => {
    const module = await Test.createTestingModule({
      imports: [BusModule],
    })
      .overrideProvider(BusService)
      .useValue(BusService)
      .compile();

    app = module.createNestApplication();
    await app.init();
  });

  it(`/GET agencies`, () => {
    return request(app.getHttpServer())
      .get('/agencies')
      .expect(200)
      .expect({
        data: BusService.find(),
      });
  });

  afterAll(async () => {
    await app.close();
  });
});
