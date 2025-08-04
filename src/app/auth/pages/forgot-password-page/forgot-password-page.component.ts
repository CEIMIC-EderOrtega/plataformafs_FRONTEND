import { CommonModule } from '@angular/common';
import { Component, EventEmitter, inject, OnInit, Output, signal } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { PrimeNG } from 'primeng/config';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { InputTextModule } from 'primeng/inputtext';
import { MessageModule } from 'primeng/message';
import { RippleModule } from 'primeng/ripple';

@Component({
  selector: 'app-forgot-password-page',
  imports: [
    CommonModule,
    FormsModule,
    ButtonModule,
    InputTextModule,
    RippleModule,
    IconFieldModule,
    InputIconModule,
    ReactiveFormsModule,
    MessageModule
  ],
  templateUrl: './forgot-password-page.component.html'
})

export class ForgotPasswordPageComponent implements OnInit{
  constructor(private primeng: PrimeNG) {}

  fb = inject(FormBuilder);
  hasError = signal(false);
  router = inject(Router);

  forgotForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
  });

  ngOnInit() {
    this.primeng.ripple.set(true);
  }

  onSubmit() {
    if (this.forgotForm.invalid) {
      this.hasError.set(true);
      setTimeout(() => {
        this.hasError.set(false);
      }, 2000);
      return;
    }

    const { email = ''} = this.forgotForm.value;

    this.router.navigateByUrl('main');
    return;

  };

  @Output() forgotClicked = new EventEmitter<void>();

  onForgotPasswordClick() {
    this.forgotClicked.emit();
  }

}
