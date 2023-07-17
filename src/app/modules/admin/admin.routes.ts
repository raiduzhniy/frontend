import { Route } from '@angular/router';
import { AdminComponent } from './admin.component';
import { AdminAboutUsComponent } from './pages/admin-about-us/admin-about-us.component';
import { AdminContactsComponent } from './pages/admin-contacts/admin-contacts.component';
import { AdminNewsComponent } from './pages/admin-news/admin-news.component';
import { AdminPhotosComponent } from './pages/admin-photos/admin-photos.component';

export const ADMIN_CHILDREN_ROUTES: Route[] = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'photos',
  },
  {
    path: 'photos',
    component: AdminPhotosComponent,
    data: {
      label: 'Фотографії',
    },
  },
  {
    path: 'news',
    component: AdminNewsComponent,
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
    children: ADMIN_CHILDREN_ROUTES,
  },
];
