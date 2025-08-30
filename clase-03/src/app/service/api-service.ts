import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal} from '@angular/core';
import { Observable, Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  //injecto siempre para poder usar los datos de la api
  http = inject(HttpClient)
  apiUrl = 'https://pokeapi.co/api/v2/pokemon/';

  //es para que los cambios se vean al momento
  pokemonActual = signal<any>('');

  traerPorNombre(nombre:string){
    //segundo paso crear la peticion
    //en donde dice any en el get si se que recibo le pongo el tipo de dato que va
    const peticion :Observable<any> = this.http.get<any>(this.apiUrl + nombre);

    //suscribirnos y definir que vamos a hacer con la respuesta
    const suscripcion: Subscription = peticion.subscribe((respuesta)=>{
      this.pokemonActual.set(respuesta);
      
      //desuscribir y dejar de pegarle a la api
      suscripcion.unsubscribe();
    
    })

    

  }

}
