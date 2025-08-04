import { CommonModule } from '@angular/common';
import { Component, EventEmitter, inject, OnInit, Output, signal } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { PrimeNG } from 'primeng/config';
import { InputTextModule } from 'primeng/inputtext';
import { RippleModule } from 'primeng/ripple';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { MessageModule } from 'primeng/message';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'login-page',
  imports: [
    CommonModule,
    ReactiveFormsModule,
    IconFieldModule,
    InputIconModule,
    InputTextModule,
    ButtonModule,
    RippleModule,
    MessageModule
  ],
  templateUrl: './login-page.component.html',
})

export class LoginPageComponent implements OnInit{
  constructor(private primeng: PrimeNG) {}

  fb = inject(FormBuilder);
  hasError = signal(false);
  isPosting = signal(false);
  router = inject(Router);


  loginForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
  });

  ngOnInit() {
    this.primeng.ripple.set(true);
  };

  onSubmit() {
    if (this.loginForm.invalid) {
      this.hasError.set(true);
      setTimeout(() => {
        this.hasError.set(false);
      }, 3000);
      return;
    }

    const { email = '', password = '' } = this.loginForm.value;

    this.router.navigateByUrl('main');
    return;

  };

  @Output() forgotClicked = new EventEmitter<void>();

  onForgotPasswordClick() {
    this.forgotClicked.emit();
  };
}

