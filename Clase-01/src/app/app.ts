import { Component, signal } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';
import { RouterOutlet ,RouterLink} from '@angular/router';
import { Bienvenida } from "./bienvenida/bienvenida";
import { Bindeos } from "./bindeos/bindeos";



@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink,Bienvenida,Bindeos],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  


}
