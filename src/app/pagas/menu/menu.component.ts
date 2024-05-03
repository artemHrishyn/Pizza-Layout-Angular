import { Component } from '@angular/core';
import { ProductComponent } from '../../components/product/product.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'pla-menu',
  standalone: true,
  imports: [
    CommonModule,
    ProductComponent
  ],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent {
  products = [
    {
      id: 1,
      title: 'Папероні',
      description: 'Папероні дуже смачна піца',
      price: 100
    },
    {
      id: 2,
      title: 'Папероні',
      description: 'Папероні дуже смачна піца',
      price: 100
    },
    {
      id: 3,
      title: 'Папероні',
      description: 'Папероні дуже смачна піца',
      price: 100
    },
    {
      id: 4,
      title: 'Папероні',
      description: 'Папероні дуже смачна піца',
      price: 100
    },
    {
      id: 5,
      title: 'Папероні',
      description: 'Папероні дуже смачна піца',
      price: 100
    },
    {
      id: 6,
      title: 'Папероні',
      description: 'Папероні дуже смачна піца',
      price: 100
    },
    {
      id: 7,
      title: 'Папероні',
      description: 'Папероні дуже смачна піца',
      price: 100
    },
    {
      id: 8,
      title: 'Папероні',
      description: 'Папероні дуже смачна піца',
      price: 100
    },
    {
      id: 9,
      title: 'Папероні',
      description: 'Папероні дуже смачна піца',
      price: 100
    },
  ]
}
