import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { Observable, tap } from 'rxjs';
import { UserRole } from '../../shared/enums';
import { PermissionsService } from '../services/permissions.service';

export const forRolesGuard: CanActivateFn = (route): Observable<boolean> => {
  const permissionsService = inject(PermissionsService);
  const router = inject(Router);
  const rolesForCheck: UserRole[] = route.data['forRoles'];

  return permissionsService.checkPermissions(rolesForCheck).pipe(
    tap(allowed => {
      if (!allowed) {
        router.navigate(['']);
      }
    })
  );
};
