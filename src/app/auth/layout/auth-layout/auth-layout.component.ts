import { Component, OnInit } from '@angular/core';
import { LoginPageComponent } from '../../pages/login-page/login-page.component';
import { InfoPageComponent } from '../../pages/info-page/info-page.component';
import { PrimeNG } from 'primeng/config';
import { CommonModule } from '@angular/common';
import { ForgotPasswordPageComponent } from '../../pages/forgot-password-page/forgot-password-page.component';

@Component({
  selector: 'app-auth-layout',
  standalone: true,
  imports: [
    LoginPageComponent,
    InfoPageComponent,
    CommonModule,
    ForgotPasswordPageComponent
  ],
  templateUrl: './auth-layout.component.html'
})

export class AuthLayoutComponent implements OnInit{
  showForgotPassword = false;

  constructor(private primeng: PrimeNG) {}

  ngOnInit() {
    this.primeng.ripple.set(true);
  }

  toggleMode() {
    this.showForgotPassword = !this.showForgotPassword;
  }
}
