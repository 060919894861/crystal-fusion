import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'Auth',
    loadChildren: () => import('./Auth/features/auth.routes'),
  }
];
