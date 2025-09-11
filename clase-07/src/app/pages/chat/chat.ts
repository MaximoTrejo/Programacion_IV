import { Component, inject, signal } from '@angular/core';
import Mensaje from '../../interfaces/mensaje';
import { Realtime } from '../../services/realtime';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-chat',
  imports: [FormsModule],
  templateUrl: './chat.html',
  styleUrl: './chat.css'
})
export class Chat {

  realtime = inject(Realtime);

  mensajes = signal<Mensaje[]>([]);

// ngOnInit():void{
//   this.realtime.traerTodosfijo().then((array)=>{
//     this.mensajes.set(array);
//   });  
// }

ngOnInit():void{
  this.realtime.traerTodosFijo().then((array)=>{
    this.mensajes.set(array);
  });  


this.realtime.canal
.on(
  "postgres_changes",
  {
     event: "*",
      schema:"public",
     table:"chat",
     },
     (payload) =>{
      
      // this.mensajes.set([...this.mensajes(),payload.new as Mensaje]);

      //otra forma de escribir la suscripcion
      this.mensajes.update((valorAnterior) => {
        valorAnterior.push(payload.new as Mensaje);
        return valorAnterior.slice();
      });

    }
  )
  .subscribe();
}



msj="";
usuario="";

enviarMensaje(){
  this.realtime.crear(this.msj,this.usuario)
}


}
