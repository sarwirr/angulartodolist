import { TestBed } from '@angular/core/testing';

import { StaySignedInGuard } from './stay-signed-in.guard';

describe('StaySignedInGuard', () => {
  let guard: StaySignedInGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(StaySignedInGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
