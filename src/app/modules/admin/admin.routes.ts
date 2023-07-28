import { Route } from '@angular/router';
import { AdminComponent } from './admin.component';
import { AdminAboutUsComponent } from './pages/admin-about-us/admin-about-us.component';
import { AdminContactsComponent } from './pages/admin-contacts/admin-contacts.component';
import { AdminPhotosComponent } from './pages/admin-photos/admin-photos.component';

export const ADMIN_CHILDREN_ROUTES: Route[] = [
  {
    path: 'photos',
    component: AdminPhotosComponent,
    data: {
      label: 'Фотографії',
    },
  },
  {
    path: 'news',
    loadChildren: () =>
      import('./pages/admin-news/admin-news.routes').then(
        mod => mod.ADMIN_NEWS_ROUTES
      ),
    data: {
      label: 'Новини',
    },
  },
  {
    path: 'about-us',
    component: AdminAboutUsComponent,
    data: {
      label: 'Про нас',
    },
  },
  {
    path: 'contacts',
    component: AdminContactsComponent,
    data: {
      label: 'Контакти',
    },
  },
];

export const ADMIN_ROUTES: Route[] = [
  {
    path: '',
    component: AdminComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'photos',
      },
      ...ADMIN_CHILDREN_ROUTES,
    ],
  },
];
