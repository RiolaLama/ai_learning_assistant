import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../../core/services/auth.service';
import { ToastService } from '../../../core/services/toast.service';

@Component({
  selector: 'app-register',
  imports: [ReactiveFormsModule, CommonModule, RouterLink],
  templateUrl: './register.html',
  styleUrl: './register.css',
})
export class Register {
  form: FormGroup;
  loading = signal(false);
  errorMessage = signal<string | null>(null);

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private auth: AuthService,
    private toast: ToastService
  ) {
    this.form = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  submit() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    this.loading.set(true);
    this.errorMessage.set(null);

    // // Mock API simulation — replace with real API call later
    // setTimeout(() => {
    //   this.loading.set(false);
    //   console.log('Registered user:', this.form.value);

    //   // redirect after success
    //   this.router.navigate(['/auth/login']);
    // }, 1000);
    this.auth.register(this.form.value).subscribe({
      next: () => {
        this.toast.success('Registration successful!');

        this.router.navigate(['/login']);
      },
      error: (err) => {
        console.error(err);
        alert('Failed to register');
      },
    });
  }
}
