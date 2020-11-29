import { TestBed } from '@angular/core/testing';

import { ExcersiseService } from './excersise.service';

describe('ExcersiseService', () => {
  let service: ExcersiseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExcersiseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
