import { Component ,inject} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ApiService } from '../../service/api-service';


@Component({
  selector: 'app-https',
  imports: [FormsModule],
  templateUrl: './https.html',
  styleUrl: './https.css'
})
export class Https {
  
  apiService = inject(ApiService);

  nombre='';
  
  traer(){
    this.apiService.traerPorNombre(this.nombre);
  }
}
