import { Route } from '@angular/router';
import { AdminNewsComponent } from './admin-news.component';
import { NewsProcessingComponent } from './pages/news-processing/news-processing.component';

export const ADMIN_NEWS_ROUTES: Route[] = [
  {
    path: '',
    component: AdminNewsComponent,
  },
  {
    path: 'new',
    component: NewsProcessingComponent,
    data: {
      isEditMode: false,
    },
  },
  {
    path: ':newsId',
    component: NewsProcessingComponent,
    data: {
      isEditMode: true,
    },
  },
];
