import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { adminpra20Guard } from './adminpra20-guard';

describe('adminpra20Guard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) =>
    TestBed.runInInjectionContext(() => adminpra20Guard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
