import { Component, output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Persona } from '../../clases/persona';
import { Boton } from "../boton/boton";
@Component({
  selector: 'app-agregar-alumnos',
  imports: [FormsModule, Boton],
  templateUrl: './agregar-alumnos.html',
  styleUrl: './agregar-alumnos.css'
})
export class AgregarAlumnos {

  //output -> salida -> envio de informacion hacia el padre

  nombre:string = '';
  apellido:string ='';
  legajo:number = 0;


  enviodealumno = output<Persona>();

  agregar(){
    //envia al padre el elemento de agregar
    const persona =  new Persona(this.legajo,this.nombre,this.apellido);
    console.log(persona);
    this.enviodealumno.emit(persona)
  }
}
