import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { Route, RouterModule } from '@angular/router';
import { COMMON_ROUTES } from './modules/basic';
import { LoginDialogComponent } from './shared/components/dialogs';

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
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(private dialog: MatDialog) {}

  commonRoutes: Route[] = COMMON_ROUTES;

  openLoginDialog() {
    this.dialog.open(LoginDialogComponent, {
      minWidth: '300px',
    });
  }
}
