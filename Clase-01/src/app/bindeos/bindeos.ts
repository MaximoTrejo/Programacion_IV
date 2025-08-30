import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-bindeos',
  imports: [FormsModule],
  templateUrl: './bindeos.html',
  styleUrl: './bindeos.css'
})
export class Bindeos {

  nombre:string  = "agus"
numero: number  = 1; //numero

numero1: number | string = 1 //se puede tener 2 tipos de variables

cualquiera: any ="a" // tipo que puede ser cualquiera

link: string ="https://google.com"
//bindeo , binding 
// conectar html con TS

// {{ }} permite usar TS al html
//otros tipos
//[] ts a atributos html
// () para pasar metodos 
// bildeo doble [()]
//hace que si la variable cambia en html cambia el TS y viseversa

contar(){
  this.numero++;
  console.log(this.numero1)
}


borrar(){
  this.nombre ="";
}
}
