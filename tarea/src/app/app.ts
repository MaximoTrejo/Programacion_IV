import { Component, signal } from '@angular/core';
import { RouterOutlet ,RouterLink} from '@angular/router';
import { Bienvenida } from './pages/bienvenida/bienvenida';
import { Footer } from './pages/footer/footer';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,RouterLink],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('tareas');
}
