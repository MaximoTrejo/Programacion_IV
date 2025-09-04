import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { Auth } from './services/auth';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('clase-05');


  email ='';
  contrasenia='';

  protected authService = inject(Auth);

  crearCuenta(){
    this.authService.crearCuenta(this.email,this.contrasenia);
  }

  iniciarSesion(){
    this.authService.iniciarSesion(this.email,this.contrasenia);
  }

  cerrarSesion(){
    this.authService.cerrarSesion();
  }

}
