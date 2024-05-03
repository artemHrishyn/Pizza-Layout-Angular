import { Component, Input, OnInit } from '@angular/core';
import { IProduct } from '../../interfaces/product.interfaces';
import { OrderComponent } from '../order/order.component';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'pla-product',
  standalone: true,
  imports: [
    OrderComponent,
    CurrencyPipe
  ],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent implements OnInit{
  @Input() product: IProduct = {} as IProduct;
  public image!: string;
  
  ngOnInit(): void {
    this.image = `../../../assets/pizza-${this.product.id}.svg`; 
  }
}
