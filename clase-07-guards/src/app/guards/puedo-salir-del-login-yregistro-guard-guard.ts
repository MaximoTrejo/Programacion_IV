import { inject } from '@angular/core';
import { CanDeactivateFn } from '@angular/router';
import { Auth } from '../services/auth';

export const puedoSalirDelLoginYRegistroGuardGuard: CanDeactivateFn<unknown> = (component, currentRoute, currentState, nextState) => {
const auth = inject(Auth);

  if (auth.user) {
    return true;
  }

  // console.log(component, currentRoute, currentState, nextState);

  if (nextState.url === '/login' || nextState.url === '/registro') {
    return true;
  }

  return false;
};
