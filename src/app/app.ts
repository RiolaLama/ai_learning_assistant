import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Sidebar } from './layout/sidebar/sidebar';
import { Topbar } from './layout/topbar/topbar';
import { ModalRoot } from './core/modal-root/modal-root';
import { AuthService } from './core/services/auth.service';
import { Toast } from './shared/components/toast/toast';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Sidebar, Topbar, ModalRoot, Toast],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('ai-learning-assistant-v1');
  constructor(public auth: AuthService) {}
}
