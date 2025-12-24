import { HttpClient } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';
import { Router } from '@angular/router';
import { AuthUser } from '../interfaces/auth.interface';
import { AuthStorage } from '../interfaces/auth_storage.interface';
import { ToastService } from './toast.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private API_URL = 'http://localhost:5000/api/auth';
  private STORAGE_KEY = 'auth';

  user = signal<AuthUser | null>(null);
  token = signal<string | null>(null);

  constructor(private http: HttpClient, private router: Router, private toast: ToastService) {
    this.restoreSession();
  }

  /* ---------------- SESSION ---------------- */

  private restoreSession() {
    const raw = localStorage.getItem(this.STORAGE_KEY);
    if (!raw) return;

    try {
      const { user, token } = JSON.parse(raw) as AuthStorage;

      if (this.isTokenExpired(token)) {
        this.logout('expired');
        return;
      }

      this.user.set(user);
      this.token.set(token);
    } catch {
      this.logout();
    }
  }

  private saveSession(user: AuthUser, token: string) {
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify({ user, token }));
  }

  /* ---------------- API ---------------- */

  register(data: any) {
    return this.http.post(`${this.API_URL}/register`, data);
  }

  login(data: any) {
    return this.http.post<any>(`${this.API_URL}/login`, data);
  }

  handleLoginSuccess(user: AuthUser, token: string) {
    this.user.set(user);
    this.token.set(token);
    this.saveSession(user, token);
    this.router.navigate(['/dashboard']);
  }

  /* ---------------- LOGOUT ---------------- */

  logout(reason: 'manual' | 'expired' = 'manual') {
    this.user.set(null);
    this.token.set(null);
    localStorage.removeItem(this.STORAGE_KEY);

    if (reason === 'expired') {
      this.toast.info('Your session expired. Please log in again.');
    }

    this.router.navigate(['/login']);
  }

  /* ---------------- HELPERS ---------------- */

  isLoggedIn(): boolean {
    return !!this.token();
  }

  private isTokenExpired(token: string): boolean {
    try {
      const payload = JSON.parse(atob(token.split('.')[1]));
      return payload.exp * 1000 < Date.now();
    } catch {
      return true;
    }
  }
}
