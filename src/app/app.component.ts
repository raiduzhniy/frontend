import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { Route, RouterModule } from '@angular/router';
import { AuthFacade } from '@state/auth';
import { ADMIN_CHILDREN_ROUTES } from './modules/admin';
import { COMMON_ROUTES } from './modules/basic';
import { LoginDialogComponent } from '@shared/components/dialogs';
import { ForRolesDirective } from '@shared/directives/for-roles.directive';
import { UserRole } from '@shared/enums';

@Component({
  selector: 'rdn-root',
  standalone: true,
  imports: [
    CommonModule,
    MatTabsModule,
    MatToolbarModule,
    MatButtonModule,
    RouterModule,
    MatIconModule,
    NgOptimizedImage,
    MatDialogModule,
    MatMenuModule,
    ForRolesDirective,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  userRoles = UserRole;

  user$ = this.authFacede.user$;

  constructor(
    private dialog: MatDialog,
    private authFacede: AuthFacade
  ) {}

  commonRoutes: Route[] = COMMON_ROUTES;

  adminRoutes: Route[] = ADMIN_CHILDREN_ROUTES;

  openLoginDialog() {
    this.dialog.open(LoginDialogComponent, {
      minWidth: '300px',
    });
  }

  logout(): void {
    this.authFacede.dispatchLogout();
  }
}
