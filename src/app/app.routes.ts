import { Routes } from '@angular/router';
import { NotFoundComponent } from './modules/not-found/not-found.component';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./modules/basic/basic.routes').then(mod => mod.BASIC_ROUTES),
  },
  {
    path: 'admin',
    loadChildren: () =>
      import('./modules/admin/admin.routes').then(mod => mod.ADMIN_ROUTES),
  },
  {
    path: '404',
    component: NotFoundComponent,
  },
  {
    path: '**',
    redirectTo: '404',
  },
];
