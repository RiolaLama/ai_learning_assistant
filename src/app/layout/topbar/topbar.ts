import { Component, signal } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../core/services/auth.service';

@Component({
  selector: 'app-topbar',
  imports: [RouterLink],
  templateUrl: './topbar.html',
  styleUrl: './topbar.css',
})
export class Topbar {
  menuOpen = signal(false);

  constructor(public auth: AuthService) {}

  toggleMenu() {
    this.menuOpen.update((v) => !v);
  }

  logout() {
    this.auth.logout();
    window.location.href = '/login';
  }
}
