import { TestBed, inject } from '@angular/core/testing';

import { HealthService } from './health.service';
import {HttpClientTestingModule} from '@angular/common/http/testing';

describe('HealthService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule],
      providers: [HealthService]
    });
  });

  it('should be created', inject([HealthService], (service: HealthService) => {
    expect(service).toBeTruthy();
  }));
});
