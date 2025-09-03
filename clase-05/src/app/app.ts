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

  authService = inject(Auth);

  crearCuenta(){
    this.authService.crearCuenta(this.email,this.contrasenia);
  }

}
