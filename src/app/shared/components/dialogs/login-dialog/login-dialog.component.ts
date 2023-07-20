import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { AuthFacade } from '@state/auth';
import { filter, Observable } from 'rxjs';

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
})
@UntilDestroy()
export class LoginDialogComponent {
  isLoading$: Observable<boolean> = this.authFacade.isLoading$;
  error$ = this.authFacade.error$;

  form: FormGroup;
  loginFC = new FormControl('', [Validators.required]);
  passwordFC = new FormControl('', [Validators.required]);

  constructor(
    fb: FormBuilder,
    public dialogRef: MatDialogRef<LoginDialogComponent>,
    private authFacade: AuthFacade
  ) {
    this.form = fb.group({
      login: this.loginFC,
      password: this.passwordFC,
    });

    this.watchForLogin();
  }

  login() {
    if (this.form.valid) {
      this.authFacade.dispatchLogin(this.form.getRawValue());
    }
  }

  private watchForLogin(): void {
    this.authFacade.user$
      .pipe(
        untilDestroyed(this),
        filter(user => !!user)
      )
      .subscribe(user => this.dialogRef.close(user));
  }
}
