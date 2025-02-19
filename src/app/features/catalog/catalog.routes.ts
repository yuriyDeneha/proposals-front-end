import { Routes } from '@angular/router';
import { ProposalDetailsComponent } from './components/proposal-details/proposal-details.component';

export const catalogRoutes: Routes = [
  {
    path: 'proposal/:id',
    component: ProposalDetailsComponent,
  },
  {
    path: '',
    redirectTo: 'proposal/1',
    pathMatch: 'full',
  },
];
