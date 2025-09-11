import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { Auth } from '../services/auth';

export const noestaLogueadoGuard: CanActivateFn = (route, state) => {
  const auth = inject(Auth);

  return auth.user ? false : true;
};
