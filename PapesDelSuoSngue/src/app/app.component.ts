import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  numero :number;
  @Input() numeriEstratti: number[];
  constructor(){
    this.numeriEstratti = [];
  }

  
  visualizzaNumero() {
    if (!this.numeriEstratti.includes(this.numero)) {
      console.log(this.numero);
      this.numeriEstratti.push(this.numero);
      console.log('Numeri estratti: ', this.numeriEstratti);
    } else {
      console.log('Il numero è già stato estratto.');
    }
  }
}

