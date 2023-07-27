import { Component } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import {
  Route,
  RouterLink,
  RouterLinkActive,
  RouterOutlet,
} from '@angular/router';
import { UserMenuComponent } from '@shared/components';
import { LoginDialogComponent } from '@shared/components/dialogs';
import { ForRolesDirective } from '@shared/directives';
import { UserRole } from '@shared/enums';
import { MainLogoComponent } from '@shared/svg-icons/main-logo.icon';
import { AuthFacade } from '@state/auth';
import { COMMON_ROUTES } from './basic.routes';

@Component({
  selector: 'rdn-basic',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    MatToolbarModule,
    MatTabsModule,
    RouterLink,
    RouterLinkActive,
    MatMenuModule,
    MatButtonModule,
    MatIconModule,
    NgOptimizedImage,
    MatDialogModule,
    ForRolesDirective,
    MainLogoComponent,
    UserMenuComponent,
  ],
  templateUrl: './basic.component.html',
  styleUrls: ['./basic.component.scss'],
})
export class BasicComponent {
  userRoles = UserRole;

  user$ = this.authFacede.user$;

  constructor(
    private dialog: MatDialog,
    private authFacede: AuthFacade
  ) {}

  commonRoutes: Route[] = COMMON_ROUTES;

  openLoginDialog() {
    this.dialog.open(LoginDialogComponent, {
      minWidth: '300px',
    });
  }

  logout(): void {
    this.authFacede.dispatchLogout();
  }

  protected readonly UserRole = UserRole;
}
