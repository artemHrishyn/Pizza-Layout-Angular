import { Component } from '@angular/core';
import { OrderComponent } from '../../components/order/order.component';

@Component({
  selector: 'pla-main',
  standalone: true,
  imports: [
    OrderComponent
  ],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {
  public counter: number = 1;
  public img = `../../../assets/pizza-${this.counter}.svg`;
  
  public chengPizza(value: string){
    if(value == 'right'){
      (this.counter < 9)? this.counter++ : this.counter = 1;
    }
    else{
      (this.counter > 1)? this.counter-- :  this.counter = 9 ;
    }
    this.img = `../../../assets/pizza-${this.counter}.svg`;
  }
}
