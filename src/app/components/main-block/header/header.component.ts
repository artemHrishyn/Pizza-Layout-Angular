import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LoginFormComponent } from '../../login-form/login-form.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'pla-header',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    LoginFormComponent
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  public isLoginForm: boolean = false;

  public loginForm(){
    this.isLoginForm = !this.isLoginForm;
  }
}
