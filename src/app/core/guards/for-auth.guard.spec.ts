import { TestBed } from '@angular/core/testing';

import { ForAuthGuard } from './for-auth.guard';

describe('ForAuthGuard', () => {
  let guard: ForAuthGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ForAuthGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
