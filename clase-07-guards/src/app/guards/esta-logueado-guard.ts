import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { Auth } from '../services/auth';

export const estaLogueadoGuard: CanActivateFn = (route, state) => {
  
  const auth = inject(Auth);


  
  return auth.user? true: false;


};


