import { TestBed } from '@angular/core/testing';

import { ContestServiceService } from './contest-service.service';

describe('ContestServiceService', () => {
  let service: ContestServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ContestServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
