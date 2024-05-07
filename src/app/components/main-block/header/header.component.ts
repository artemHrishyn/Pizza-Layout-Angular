import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LoginFormComponent } from '../../login-form/login-form.component';
import { CommonModule } from '@angular/common';
import { GoToUrlService } from '../../../services/go-to-url.service';

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
  public userImg: string = "assets/icon/user.svg";
  
  constructor(
    private goToUrlService: GoToUrlService
  ) {}

  public loginForm(){
    if (this.userImg === 'assets/icon/user.svg')
      {
        this.isLoginForm = !this.isLoginForm;
      }
      else
      {
        this.goToUrlService.goToUrl('personal-area');
      }
      
  }
  
  public returnLogin() {
    this.isLoginForm = false;
  }
  public returnImage(image: string) {
    this.userImg = image;
  }
}
