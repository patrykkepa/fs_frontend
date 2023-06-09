import { TestBed } from '@angular/core/testing';

import { ForNotAuthGuard } from './for-not-auth.guard';

describe('AuthGuardGuard', () => {
  let guard: ForNotAuthGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ForNotAuthGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
