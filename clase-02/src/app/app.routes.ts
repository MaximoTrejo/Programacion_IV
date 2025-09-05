//si uso el loadComponent: () => import("./pages/login/login").then((module)=> module.Login) no necesito el import

import { Routes } from '@angular/router';
import { Bienvenida } from './pages/bienvenida/bienvenida';
import { Login } from './pages/login/login';
import { Registro } from './pages/registro/registro';
import { Error } from './pages/error/error';
import { Auth } from './pages/auth/auth';

export const routes: Routes = [

    //para que si se escribe cualquier mal alguna ruta vaya a uno en especifico
    {path: "",redirectTo : 'bienvenida',pathMatch: 'full'},

    //{path: "bienvenida",component: Bienvenida,},//url
    {path: "registro",component: Registro,},
    {path: "***",component: Error}, //otra forma es redirecTo: 'bienvenida'

    //para que direccione
    //,{path: "***",redirectTo : 'bienvenida'} 

    //forma de carga coolback -- enfriamiento para que no cargue todo junto 
     {path: "bienvenida",loadComponent: () => import("./pages/bienvenida/bienvenida").then((module)=> module.Bienvenida)},
    {path: "login",loadComponent: () => import("./pages/login/login").then((module)=> module.Login)},
    {path: "error",loadComponent: () => import("./pages/error/error").then((module)=> module.Error)},

    //rutas hijas //la de auth esta ruteadas las hijas en un archivo aparte
    {path: "auth", loadComponent: () => import("./pages/auth/auth").then((module)=> module.Auth) , 
        loadChildren: () => import("./pages/auth/auth.routes").then((router)=> router.authRoutes),},

    {path: "login",loadComponent: () => import("./pages/login/login").then((module)=> module.Login)},

    //para pasar parametros a las rutas
    {path: "usuarios/:id",loadComponent: () => import("./pages/usuarios/usuarios").then((module)=> module.Usuarios)},

    
     //otra forma es redirecTo: 'bienvenida'
];
