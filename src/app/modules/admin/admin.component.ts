import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import {
  Route,
  RouterLink,
  RouterLinkActive,
  RouterOutlet,
} from '@angular/router';
import { UserMenuComponent } from '@shared/components';
import {
  LogoWithoutLabelIconComponent,
  MainLogoComponent,
} from '@shared/svg-icons';
import { ADMIN_CHILDREN_ROUTES } from './admin.routes';

@Component({
  selector: 'rdn-admin',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    MatToolbarModule,
    MatTabsModule,
    RouterLink,
    RouterLinkActive,
    NgOptimizedImage,
    MainLogoComponent,
    LogoWithoutLabelIconComponent,
    UserMenuComponent,
  ],
  templateUrl: './admin.component.html',
  styleUrls: ['admin.component.scss'],
})
export class AdminComponent {
  adminRoutes: Route[] = ADMIN_CHILDREN_ROUTES;
}
