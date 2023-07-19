import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import {
  AngularEditorConfig,
  AngularEditorModule,
} from '@kolkov/angular-editor';
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
  ],
  templateUrl: './admin-about-us.component.html',
  styleUrls: ['./admin-about-us.component.scss'],
})
export class AdminAboutUsComponent {
  protected readonly TEXT_EDITOR_CONFIG = TEXT_EDITOR_CONFIG;

  form: FormGroup;

  editorFC = new FormControl('');
  config: AngularEditorConfig = {
    ...TEXT_EDITOR_CONFIG,
    placeholder: 'Інформація про нас...',
  };
  constructor(private fb: FormBuilder) {
    this.form = fb.group({
      editor: this.editorFC,
    });
  }

  submitForm() {
    console.log(this.form.getRawValue());
  }
}
