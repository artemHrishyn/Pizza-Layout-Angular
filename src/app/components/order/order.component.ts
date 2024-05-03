import { Component } from '@angular/core';
import { GoToUrlService } from '../../services/go-to-url.service';

@Component({
  selector: 'pla-order',
  standalone: true,
  imports: [],
  templateUrl: './order.component.html',
  styleUrl: './order.component.scss'
})
export class OrderComponent {
  
  constructor(private goToUrlService: GoToUrlService){}
  public goToUrl(value: string) {
    this.goToUrlService.goToUrl(value);
  }
}
