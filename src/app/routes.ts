import { Routes } from '@angular/router';
import { DashboardComponent } from './features/dashboard/dashboard.component'; // ✅ FIXED PATH

export const routes: Routes = [
  { path: '', component: DashboardComponent }, // Default route
  { path: 'dashboard', component: DashboardComponent }, // Dashboard route
];
