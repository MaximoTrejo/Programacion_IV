import { Injectable, signal, WritableSignal } from '@angular/core';
import { createClient, Session, SupabaseClient, User } from '@supabase/supabase-js';
import { every } from 'rxjs';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class Auth {
  private url ="https://zwkckzgowowuzrlqifnz.supabase.co";
  private key = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inp3a2Nremdvd293dXpybHFpZm56Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTY5MzYxMjcsImV4cCI6MjA3MjUxMjEyN30.U19fbjvpCmFS2V2JBNDKSJX9X0eagCxyg961m75S4kQ";

  private supabase:SupabaseClient<any, "public", "public", any, any>;

  public usuarioActual: WritableSignal<User | null> = signal<User | null>(null);

  constructor(){
    // Create a single supabase client for interacting with your database
    this.supabase = createClient(this.url, this.key)

    //es un .suscribe pero lo hace supabase
    this.supabase.auth.onAuthStateChange((event, session) => {
      console.log(event);
      console.log(session);
      this.usuarioActual.set(session !== null ? session.user : null);
    });
  }

  // iniciarSesion(email:string, password:string){
  //   this.supabase.auth.signInWithPassword({email:email,password:password});
  // }

  // crearCuenta(email:string, password:string){
  //   this.supabase.auth.signUp({email:email,password:password});
  // }

  async iniciarSesion(email:string, password:string){
    const respuesta= await this.supabase.auth.signInWithPassword({email:email,password:password});
    if(respuesta.error){
      console.log(respuesta.error);

      Swal.fire({
        title: 'Algo salió mal',
        icon: 'error',
        text: 'Fijate que hiciste',
      });
      return
    }
    console.log(respuesta.error);
  }

  async crearCuenta(email:string, password:string){
    const respuesta= await this.supabase.auth.signUp({email:email,password:password});
    if(respuesta.error){
      console.log(respuesta.error);

      switch (respuesta.error.message) {
        case 'User already registered':
          Swal.fire({
        title: 'Algo salió mal',
        icon: 'error',
        text: 'el usuario ya esta registrado',
      });
          break;
        default:
          console.log('Error desconcido');
        // alert('ESTO NO');
      }


      return
    }
    console.log(respuesta.error);
  }

  cerrarSesion(){
    this.supabase.auth.signOut();
  }


  //sesiones
  //1.Crear la cuenta
  //2-Iniciar sesion
  //3-Cerrar sesion


  //cambiar clave, borrar la cuenta



}
