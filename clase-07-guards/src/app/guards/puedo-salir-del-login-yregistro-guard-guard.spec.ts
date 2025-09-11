import { TestBed } from '@angular/core/testing';
import { CanDeactivateFn } from '@angular/router';

import { puedoSalirDelLoginYRegistroGuardGuard } from './puedo-salir-del-login-yregistro-guard-guard';

describe('puedoSalirDelLoginYRegistroGuardGuard', () => {
  const executeGuard: CanDeactivateFn<unknown> = (...guardParameters) => 
      TestBed.runInInjectionContext(() => puedoSalirDelLoginYRegistroGuardGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
