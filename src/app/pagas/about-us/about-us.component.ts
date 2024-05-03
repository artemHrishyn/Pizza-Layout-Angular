import { Component } from '@angular/core';
import { OrderComponent } from '../../components/order/order.component';

@Component({
  selector: 'pla-about-us',
  standalone: true,
  imports: [
    OrderComponent
  ],
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.scss'
})
export class AboutUsComponent {

}
