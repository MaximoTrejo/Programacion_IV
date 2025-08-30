import { Component } from '@angular/core';
import { CardTutorialType } from '../../classes/card-tutorial';
import { Card } from '../../component/card/card';

@Component({
  selector: 'app-tutoriales',
  imports: [Card],
  templateUrl: './tutoriales.html',
  styleUrl: './tutoriales.css'
})
export class Tutoriales {
  card1: CardTutorialType = {
    titulo: 'Algo',
    desc: 'Texto',
    imagen: 'https://upload.wikimedia.org/wikipedia/commons/6/67/UTN_logo.jpg',
    textUrl: 'utn',
    url: '/',
  };
  card2: CardTutorialType = {
    titulo: 'Algo2',
    desc: 'Texto2',
    imagen: 'https://upload.wikimedia.org/wikipedia/commons/6/67/UTN_logo.jpg',
    textUrl: 'utn',
    url: '/',
  };
  card3: CardTutorialType = {
    titulo: 'Algo3',
    desc: 'Texto3',
    imagen: 'https://upload.wikimedia.org/wikipedia/commons/6/67/UTN_logo.jpg',
    textUrl: 'utn',
    url: '/',
  };


  cambiarTutoriales1(){
    this.card1={
      titulo: 'Algo88',
      desc: 'Texto3',
      imagen: 'https://upload.wikimedia.org/wikipedia/commons/6/67/UTN_logo.jpg',
      textUrl: 'utn',
      url: '/',
    }
    
  }



}
