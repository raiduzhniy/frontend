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
  selector: 'rdn-admin-news',
  standalone: true,
  imports: [
    CommonModule,
    AngularEditorModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatCardModule,
  ],
  templateUrl: './admin-news.component.html',
  styleUrls: ['./admin-news.component.scss'],
})
export class AdminNewsComponent {
  form: FormGroup;

  editorFC = new FormControl('');
  config: AngularEditorConfig = {
    ...TEXT_EDITOR_CONFIG,
    placeholder: 'Текст новини...',
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
