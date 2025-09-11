import { Routes } from '@angular/router';
import { Login } from './pages/login/login';
import { Registro } from './pages/registro/registro';
import { Juegos } from './pages/juegos/juegos';
import { Error } from './pages/error/error';
import { Admin } from './pages/admin/admin';
import { Home } from './pages/home/home';
import { estaLogueadoGuard } from './guards/esta-logueado-guard';
import { puedoSalirDelLoginYRegistroGuardGuard } from './guards/puedo-salir-del-login-yregistro-guard-guard';
import { noestaLogueadoGuard } from './guards/noesta-logueado-guard';

export const routes: Routes = [

    
    {path: "home",component: Home,},//url
        {path: "login",component: Login,},
        {path: "registro",component: Registro,},
        {path: "juegos",component: Juegos,canActivate: [estaLogueadoGuard]},
        {path: "admin",component: Admin},
    {path: "**",component: Error, pathMatch:"full"},    {
    path: '',
    component: Home,
  },
  {
    path: 'login',
    component: Login,
    canDeactivate: [puedoSalirDelLoginYRegistroGuardGuard],
    canActivate: [noestaLogueadoGuard],
  },
  {
    path: 'registro',
    component: Registro,
    canDeactivate: [puedoSalirDelLoginYRegistroGuardGuard],
    canActivate: [noestaLogueadoGuard],
  },
  {
    path: 'juegos',
    // component: Juegos,
    loadComponent: () => import('./pages/juegos/juegos').then((arch) => arch.Juegos),
    canActivate: [estaLogueadoGuard],
  },
  {
    path: 'admin',
    component: Admin,
  },
  {
    path: '**',
    component: Error,
    pathMatch: 'full',
  },

];
