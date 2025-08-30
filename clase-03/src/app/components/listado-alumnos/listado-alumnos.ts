/* agrego el input */
import { Component, input ,output} from '@angular/core';
import { Persona } from '../../clases/persona';

@Component({
  selector: 'app-listado-alumnos',
  imports: [],
  templateUrl: './listado-alumnos.html',
  styleUrl: './listado-alumnos.css'
})
export class ListadoAlumnos {


/*  input -> entrada -> recibe datos desde un componente padre*/ 

listadoHijo = input <Persona[]>([]); 
 envioDeAlumno = output<Persona>();

  verDetalle(alumno: Persona) {
    this.envioDeAlumno.emit(alumno);
  }

  alumno: IAlumno = {
    nombre: 'A',
    apellido: 'B',
    legajo: 123,
  };

}

type Alumno = {
  nombre: String;
  apellido: String;
  legajo: Number;
};

interface IAlumno {
  nombre: string;
  apellido: string;
  legajo: number;
}

