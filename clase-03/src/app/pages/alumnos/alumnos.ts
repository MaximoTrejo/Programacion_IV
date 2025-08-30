import { Component } from '@angular/core';
import { ListadoAlumnos } from "../../components/listado-alumnos/listado-alumnos";
import { AgregarAlumnos } from "../../components/agregar-alumnos/agregar-alumnos";
import { DetalleAlumnos } from "../../components/detalle-alumnos/detalle-alumnos";
import { Persona } from '../../clases/persona';

@Component({
  selector: 'app-alumnos',
  imports: [ListadoAlumnos, AgregarAlumnos, DetalleAlumnos],
  templateUrl: './alumnos.html',
  styleUrl: './alumnos.css'
})
export class Alumnos {
  listado: Persona[]=[ 
  {
    nombre:"A",
    apellido:"B",
    legajo: 123,
  },
  {
    nombre:'B',
    apellido:'C',
    legajo: 456,
  },
  {
    nombre:'E',
    apellido:'F',
    legajo: 789,
  },

]

  alumno : Persona | null = null

  agregar(persona:Persona){
    this.listado.push(persona)
  }

  verdetalleFinal(alumno:Persona){
    this.alumno =alumno;
  }

}
