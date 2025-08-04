
/* layout.routes.ts */
import { Routes } from '@angular/router';
import { AppLayoutComponent } from './app.layout.component';
import { DashIntranetComponent } from '../page/dashboards/dash-intranet/dash-intranet.component';
import { DashClienteComponent } from '../page/dashboards/dash-cliente/dash-cliente.component';

export const layoutRoutes: Routes = [
  {
    path: '',
    component: AppLayoutComponent,
    children: [
      {
        path: 'dashintranet',
        component: DashIntranetComponent,
        data: { breadcrumb: 'Dashboard Intranet' }
      },
      {
        path: 'dashcliente',
        component: DashClienteComponent,
        data: { breadcrumb: 'Dashboard Cliente' }
      },
      {
        path: '**',
        redirectTo: 'auth',
      },
    ],
  },

];

export default layoutRoutes;
