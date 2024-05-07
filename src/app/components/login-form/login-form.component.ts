import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { GoToUrlService } from '../../services/go-to-url.service';

@Component({
  selector: 'pla-login-form',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.scss'
})
export class LoginFormComponent {
  
  @Input() isLogin: boolean = false;
  @Output() closeLogin: EventEmitter<boolean> = new EventEmitter<boolean>();

  @Input() imgLogin: string = '';
  @Output() returnImgLogin: EventEmitter<string> = new EventEmitter<string>();

  public loginData: FormGroup;
  
  constructor(private goToUrlService: GoToUrlService) {
    this.loginData = new FormGroup({
      login: new FormControl("", Validators.required),
      password: new FormControl("", [
        Validators.required,
        Validators.minLength(8),
        Validators.pattern(/[a-z]/),
        Validators.pattern(/[A-Z]/),
        Validators.pattern(/[0-9]/),
        Validators.pattern(/[!@#$%^&*()\-=_+[\]{}|\\,.<>/?~]/)
      ])
    })
  }
  
  public SignOut() {
    this.goToUrlService.goToUrl('main');
    this.isLogin = !this.isLogin
    this.closeLogin.emit(this.isLogin);
  }
  
  public onSubmit(form: FormGroup) {
     if (form.valid) {
       if (form.value.login == 'admin' && form.value.password == 'adminA1.')
       {
         this.goToUrlService.goToUrl('personal-area');
         this.imgLogin = 'https://mahesh.orgfree.com/img/log.png';
         this.closeLogin.emit(this.isLogin);
         this.returnImgLogin.emit(this.imgLogin);
       }
       else {
         form.reset();
       }
    }
  }
}
