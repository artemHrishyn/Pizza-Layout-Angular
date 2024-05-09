import { Component, OnInit } from '@angular/core';
import { ProductComponent } from '../../components/product/product.component';
import { CommonModule } from '@angular/common';
import { DataService } from '../../services/firebase/data.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'pla-menu',
  standalone: true,
  imports: [
    CommonModule,
    HttpClientModule,
    ProductComponent
  ],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent implements OnInit {
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

  public data: any;
  constructor(private firebaseDataService: DataService) { }

  ngOnInit() {
    
    this.firebaseDataService.getData().subscribe({
      next: (data) => {
        this.data = data;
        console.log('Data received:', data);
      },
      error: (error) => console.error('Error fetching data:', error)
    });
  }
}
