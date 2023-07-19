import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { RouterOutlet } from '@angular/router';
import {
  AngularEditorConfig,
  AngularEditorModule,
} from '@kolkov/angular-editor';
import { EditorModule } from '@tinymce/tinymce-angular';
import { EventObj } from '@tinymce/tinymce-angular/editor/Events';

@Component({
  selector: 'rdn-admin',
  standalone: true,
  imports: [
    CommonModule,
    EditorModule,
    AngularEditorModule,
    ReactiveFormsModule,
    MatButtonModule,
    RouterOutlet,
  ],
  template: '<router-outlet></router-outlet>',
})
export class AdminComponent {
  html = '';

  form: FormGroup;

  editorFC = new FormControl('');
  config: AngularEditorConfig = {
    editable: true,
    spellcheck: true,
    height: '15rem',
    minHeight: '5rem',
    placeholder: 'Текст новини...',
    // translate: 'no',
    defaultParagraphSeparator: 'p',
    defaultFontName: 'Roboto',
    toolbarHiddenButtons: [
      ['subscript', 'superscript'],
      ['justifyLeft', 'justifyCenter', 'justifyRight', 'justifyFull'],
      ['insertImage', 'insertVideo'],
      ['toggleEditorMode'],
      ['fontName'],
    ],
  };
  constructor(private fb: FormBuilder) {
    this.form = fb.group({
      editor: this.editorFC,
    });
  }
  test(e: EventObj<any>) {
    console.log(e.editor.bodyElement);
  }

  submitForm() {
    console.log(this.form.getRawValue());

    this.html = this.form.get('editor')?.value;
  }
}
