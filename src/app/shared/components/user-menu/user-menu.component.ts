import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { RouterLink } from '@angular/router';
import { ForRolesDirective } from '@shared/directives';
import { UserRole } from '@shared/enums';
import { AuthFacade } from '@state/auth';

@Component({
  selector: 'rdn-user-menu',
  standalone: true,
  imports: [
    CommonModule,
    ForRolesDirective,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    RouterLink,
  ],
  templateUrl: './user-menu.component.html',
  styleUrls: ['./user-menu.component.scss'],
})
export class UserMenuComponent {
  readonly userRoles = UserRole;

  readonly user$ = this.authFacade.user$;

  @Input() isAdminMode = false;

  constructor(private authFacade: AuthFacade) {}

  logout(): void {
    this.authFacade.dispatchLogout();
  }
}
