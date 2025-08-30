import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-usuarios',
  imports: [],
  templateUrl: './usuarios.html',
  styleUrl: './usuarios.css'
})
export class Usuarios {

  usuarios = [{
    nombre: "agus",
    perfil:"estudiante",
  },{
    nombre: "maxi",
    perfil:"estudiante",
  },{
    nombre: "fede",
    perfil:"estudiante",
  },{
    nombre: "rama",
    perfil:"estudiante",
  },{
    nombre: "gaby",
    perfil:"estudiante",
  }]

  //para solucionar el tema de que el servicio del id devuelve un string y el id es un numero podemos poner any que es un tipo de fato generico //no es muy recomendable
  //usuarioActual: any = 0;

  usuarioActual: number = 0;
  private activatedRoute = inject(ActivatedRoute);
  

  ngOnInit() : void{
    console.log("se instancio el componente");
    


  }

  
  ngondestroy() : void {
    console.log("se destruye el componente");
  }

  ngDoCheck(): void {

    console.log('Check');
    const id = this.activatedRoute.snapshot.paramMap.get('id');

    if (id) {
      this.usuarioActual = parseInt(id);
    }
  }
 }
