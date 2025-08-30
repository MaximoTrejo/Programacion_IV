import { Component, inject, signal } from '@angular/core';
import { RouterOutlet ,RouterLink ,} from '@angular/router';
import { ApiService } from './service/api-service';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink,FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('clase-03');


}
