import { TestBed } from '@angular/core/testing';

import { CarromServiceService } from './carrom-service.service';

describe('CarromServiceService', () => {
  let service: CarromServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CarromServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
