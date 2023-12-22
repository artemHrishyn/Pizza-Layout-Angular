import { Component } from '@angular/core';

@Component({
  selector: 'piz-main',
  standalone: true,
  imports: [],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})

export class MainComponent {
  public counter: number = 1;
  public img = `../../../assets/image/pizza-${this.counter}.svg`;
  
  public chengPizza(value: string){
    if(value == 'right'){
      (this.counter < 9)? this.counter++ : this.counter = 1;
    }
    else{
      (this.counter > 1)? this.counter-- :  this.counter = 9 ;
    }
    this.img = `../../../assets/image/pizza-${this.counter}.svg`;
  }
}
