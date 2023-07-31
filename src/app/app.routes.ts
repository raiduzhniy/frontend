import { Routes } from '@angular/router';
import { forRolesGuard } from '@core/guards/for-roles.guard';
import { NotFoundComponent } from './modules/not-found/not-found.component';
import { UserRole } from '@shared/enums';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./modules/basic/basic.routes').then(mod => mod.BASIC_ROUTES),
  },
  {
    path: 'admin',
    canActivate: [forRolesGuard],
    data: {
      forRoles: [UserRole.Admin, UserRole.Superadmin],
    },
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
