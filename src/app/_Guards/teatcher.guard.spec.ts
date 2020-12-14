import { TestBed } from '@angular/core/testing';

import { TeatcherGuard } from './teatcher.guard';

describe('TeatcherGuard', () => {
  let guard: TeatcherGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(TeatcherGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
