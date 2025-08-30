import { Component } from '@angular/core';
import { ListadoAlumnos } from '../../components/listado-alumnos/listado-alumnos';
import { Persona } from '../../clases/persona';

@Component({
  selector: 'app-profesores',
  imports: [ListadoAlumnos],
  templateUrl: './profesores.html',
  styleUrl: './profesores.css'
})
export class Profesores {

  listadoprofesores: Persona[]=[
    
  {
    nombre:'A',
    apellido:'B',
    legajo: 123,
  }]
}
