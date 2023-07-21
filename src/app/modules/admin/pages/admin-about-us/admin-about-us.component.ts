import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {
  AngularEditorConfig,
  AngularEditorModule,
} from '@kolkov/angular-editor';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { LoaderDirective } from '@shared/directives';
import { AboutUsFacade } from '@state/about-us';
import { filter } from 'rxjs';
import { TEXT_EDITOR_CONFIG } from '../../constants/editor.constant';

@Component({
  selector: 'rdn-admin-about-us',
  standalone: true,
  imports: [
    CommonModule,
    AngularEditorModule,
    MatButtonModule,
    MatCardModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    LoaderDirective,
  ],
  providers: [AboutUsFacade],
  templateUrl: './admin-about-us.component.html',
  styleUrls: ['./admin-about-us.component.scss'],
})
@UntilDestroy()
export class AdminAboutUsComponent implements OnInit {
  aboutUs$ = this.aboutUsFacade.aboutUs$;

  isLoading$ = this.aboutUsFacade.isLoading$;

  form: FormGroup;

  titleFC = new FormControl('', [Validators.required]);

  editorFC = new FormControl('');

  readonly config: AngularEditorConfig = {
    ...TEXT_EDITOR_CONFIG,
    placeholder: 'Інформація про нас...',
  };

  constructor(
    private fb: FormBuilder,
    private aboutUsFacade: AboutUsFacade
  ) {
    this.form = fb.group({
      html: this.editorFC,
      title: this.titleFC,
    });

    this.observeAboutUsInfo();
  }

  ngOnInit() {
    this.aboutUsFacade.dispatchGetAboutUs();
  }

  submitForm() {
    this.aboutUsFacade.dispatchEditAboutUs(this.form.getRawValue());
  }

  observeAboutUsInfo(): void {
    this.aboutUs$
      .pipe(
        untilDestroyed(this),
        filter(info => !!info)
      )
      .subscribe(htmlData => {
        this.titleFC.setValue(htmlData?.title as string);
        this.editorFC.setValue(htmlData?.html as string);
      });
  }
}
