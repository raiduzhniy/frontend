import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { map, Observable } from 'rxjs';
import { UserRole } from '../../shared/enums';
import { selectUser } from '../state/auth/auth.selector';
import { AppStateInterface } from '../types/app-state.interface';

type RolesMapper = {
  [key in UserRole]: true;
};

@Injectable({
  providedIn: 'root',
})
export class PermissionsService {
  private user$ = this.store.select(selectUser).pipe();
  constructor(private store: Store<AppStateInterface>) {}

  checkPermissions(rolesToCheck: UserRole[]): Observable<boolean> {
    return this.user$.pipe(
      map(user => user?.roles || []),
      map(roles => {
        const mapObj: RolesMapper = {} as RolesMapper;

        roles.forEach(role => (mapObj[role] = true));

        return rolesToCheck.some(role => mapObj[role]);
      })
    );
  }
}
