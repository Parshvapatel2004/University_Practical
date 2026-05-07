import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { meetGuard } from './meet-guard';

describe('meetGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) =>
    TestBed.runInInjectionContext(() => meetGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
