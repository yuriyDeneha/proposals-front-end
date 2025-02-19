import { Routes } from '@angular/router';
import { DashboardContainerComponent } from './components/dashboard-container/dashboard-container.component';

export const dashboardRoutes: Routes = [
  {
    path: '',
    component: DashboardContainerComponent,
    children: [
      {
        path: 'catalog',
        loadChildren: () =>
          import('../catalog/catalog.routes').then(
            (routes) => routes.catalogRoutes
          ),
      },
      { path: '', redirectTo: 'catalog', pathMatch: 'full' },
    ],
  },
];
