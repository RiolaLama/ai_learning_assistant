import { Routes } from '@angular/router';
import { Dashboard } from './pages/Dashboard/dashboard/dashboard';
import { DocumentList } from './pages/Documents/document-list/document-list';
import { DocumentDetails } from './pages/Documents/document-details/document-details';
import { Register } from './pages/Auth/register/register';
import { Login } from './pages/Auth/login/login';
import { AuthGuard } from './core/guards/auth.guard';
import { GuestGuard } from './core/guards/guest.guard';

export const routes: Routes = [
  { path: 'register', component: Register, canActivate: [GuestGuard] },
  { path: 'login', component: Login, canActivate: [GuestGuard] },
  { path: 'dashboard', component: Dashboard, canActivate: [AuthGuard] },
  { path: 'documents', component: DocumentList, canActivate: [AuthGuard] },
  { path: 'documents/:id', component: DocumentDetails, canActivate: [AuthGuard] },
];
