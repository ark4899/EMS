import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { routes } from './app/routes';
import { DashboardComponent } from './app/features/dashboard/dashboard.component'; // ✅ FIXED PATH

bootstrapApplication(DashboardComponent, {
  providers: [provideRouter(routes)]
}).catch(err => console.error(err));
