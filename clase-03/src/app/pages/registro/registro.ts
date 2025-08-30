import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Auth } from '../../service/auth';


@Component({
  selector: 'app-registro',
  imports: [RouterLink,FormsModule],
  templateUrl: './registro.html',
  styleUrl: './registro.css'
})
export class Registro {

nombre:string ="";
apellido:string ="";

//antes
//constructor(private auth:Auth){
//  console.log(auth.usuarioActual.nombre);
//  this.nombre = this.auth.usuarioActual.nombre;
//}


//ahora
auth = inject(Auth)


guardarUsuario(){

 this.auth.guardarUsuario(this.nombre ,this.apellido)

}

}
