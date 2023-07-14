import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  FormGroupDirective,
  NgForm,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { ErrorStateMatcher } from '@angular/material/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as AuthActions from '../../../../core/state/auth/auth.actions';
import {
  selectIsLoadingUser,
  selectUser,
  selectUserError,
} from '../../../../core/state/auth/auth.selector';
import { AppStateInterface } from '../../../../core/types/app-state.interface';
import { User } from '../../../interfaces';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(
    control: FormControl | null,
    form: FormGroupDirective | NgForm | null
  ): boolean {
    const isSubmitted = form && form.submitted;
    return !!(
      control &&
      control.invalid &&
      (control.dirty || control.touched || isSubmitted)
    );
  }
}

@Component({
  selector: 'rdn-login-dialog',
  standalone: true,
  imports: [
    CommonModule,
    MatDialogModule,
    MatButtonModule,
    MatInputModule,
    ReactiveFormsModule,
  ],
  templateUrl: './login-dialog.component.html',
  styleUrls: ['./login-dialog.component.scss'],
  providers: [{ provide: ErrorStateMatcher, useClass: MyErrorStateMatcher }],
})
export class LoginDialogComponent {
  isLoading$: Observable<boolean>;
  error$: Observable<string | null>;
  user$: Observable<User | undefined | null>;

  form: FormGroup;
  loginFC = new FormControl('', [Validators.required]);
  passwordFC = new FormControl('', [Validators.required]);

  constructor(
    fb: FormBuilder,
    private store: Store<AppStateInterface>
  ) {
    this.isLoading$ = this.store.select(selectIsLoadingUser);
    this.error$ = this.store.select(selectUserError);
    this.user$ = this.store.select(selectUser);

    this.form = fb.group({
      login: this.loginFC,
      password: this.passwordFC,
    });
  }

  login() {
    if (this.form.valid) {
      this.store.dispatch(
        AuthActions.login({ loginDto: this.form.getRawValue() })
      );
    }
  }
}
