import { Injectable, signal } from '@angular/core';
import { Toast, ToastType } from '../interfaces/toast.interface';

@Injectable({
  providedIn: 'root',
})
export class ToastService {
  toast = signal<Toast | null>(null);

  show(message: string, type: ToastType = 'info', duration = 3000) {
    this.toast.set({ message, type });

    setTimeout(() => {
      this.toast.set(null);
    }, duration);
  }

  success(message: string) {
    this.show(message, 'success');
  }

  error(message: string) {
    this.show(message, 'error');
  }

  info(message: string) {
    this.show(message, 'info');
  }
}
