import { Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  numero : number; 
  estrazzione(numerot: HTMLInputElement):boolean{ //numerot e il cocomero del html
    this.numero = Number(numerot.value) //lo trasformo numerot in un numero
    console.log(this.numero) //value =prende solo il dato inserito
    return false //serve per il codice a far capire se caricare o no il codice
  }
  }

