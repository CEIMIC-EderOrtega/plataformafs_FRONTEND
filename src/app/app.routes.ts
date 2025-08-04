

/*app.routes.ts*/
import { Routes } from '@angular/router';
import { AuthLayoutComponent } from './auth/layout/auth-layout/auth-layout.component';
import { AppLayoutComponent } from './layout/app.layout.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'auth',
    pathMatch: 'full'
  },{
    path: 'auth',
    component: AuthLayoutComponent
  },{
    path: 'main',
    loadChildren: () => import('./layout/layout.routes'),
  }
];
