import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'pla-order',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './order.component.html',
  styleUrl: './order.component.scss'
})
export class OrderComponent {
  public productData: FormGroup;

  constructor(){
    this.productData = new FormGroup({
      name: new FormControl("", Validators.required),
      adress: new FormControl("", Validators.required),
      email: new FormControl("", Validators.email),
      phone: new FormControl("", [Validators.pattern(/^\+38\(0\d{2}\)\d{2}-\d{2}-\d{3}$/)])
    });
  }
  
  onSubmit(form: FormGroup) {
    console.log(form);
  }
}
