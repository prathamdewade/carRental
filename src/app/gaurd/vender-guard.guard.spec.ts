import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { venderGuardGuard } from './vender-guard.guard';

describe('venderGuardGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => venderGuardGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
