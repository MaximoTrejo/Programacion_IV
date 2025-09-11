import { inject, Injectable } from '@angular/core';
import { Supabase } from './supabase';
import Mensaje from '../interfaces/mensaje';
import { every, subscribeOn } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Realtime {
  

  private sup = inject(Supabase);

  public canal = this.sup.supabase.channel("table-db-changes");

  // //channel
    // this.sup.supabase.channel("table-db-changes").on("postgres_changes",{
    //   event: "*",
    //   schema:"public",
    //   table:"chat",
    // },(payload) =>{
    //   console.log(payload);
    // }).subscribe();

  constructor(){
    //se pasa a otro lado 
    // console.log("se suscribe");

    // //channel
    // this.sup.supabase.channel("table-db-changes").on("postgres_changes",{
    //   event: "*",
    //   schema:"public",
    //   table:"chat",
    // },(payload) =>{
    //   console.log(payload);
    // }).subscribe();


  }

async traerTodosFijo(): Promise<Mensaje[]> {
    const { data, error } = await this.sup.supabase.from('chat').select('*');

    if (error) {
      return [];
    }
    return data as Mensaje[];
  }

  async crear(mensaje:string, usuario:string): Promise<void>{
    await this.sup.supabase.from('chat').insert ({mensaje: mensaje, usuario: usuario });
  }
}
