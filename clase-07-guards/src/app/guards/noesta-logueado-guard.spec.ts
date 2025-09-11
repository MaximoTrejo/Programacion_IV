import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { noestaLogueadoGuard } from './noesta-logueado-guard';

describe('noestaLogueadoGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => noestaLogueadoGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
