import { Route } from '@angular/router';
import { BasicComponent } from './basic.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { ContactsComponent } from './pages/contacts/contacts.component';
import { MainComponent } from './pages/main/main.component';
import { NewsComponent } from './pages/news/news.component';
import { ServicesComponent } from './pages/services/services.component';

export const COMMON_ROUTES: Route[] = [
  {
    path: '',
    component: MainComponent,
    data: {
      label: 'Головна',
    },
  },
  {
    path: 'news',
    component: NewsComponent,
    data: {
      label: 'Новини',
    },
  },
  {
    path: 'services',
    component: ServicesComponent,
    data: {
      label: 'Послуги',
    },
  },
  {
    path: 'about-us',
    component: AboutUsComponent,
    data: {
      label: 'Про нас',
    },
  },
  {
    path: 'contacts',
    component: ContactsComponent,
    data: {
      label: 'Контакти',
    },
  },
];

export const BASIC_ROUTES: Route[] = [
  {
    path: '',
    component: BasicComponent,
    children: COMMON_ROUTES,
  },
];
