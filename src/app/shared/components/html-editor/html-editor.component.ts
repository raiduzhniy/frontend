import { CommonModule } from '@angular/common';
import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
  ViewEncapsulation,
} from '@angular/core';
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
import { WrapperComponent } from '@shared/components/wrapper/wrapper.component';
import { Html } from '@shared/interfaces';
import { TEXT_EDITOR_CONFIG } from '../../../modules/admin/constants/editor.constant';

@Component({
  selector: 'rdn-html-editor',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    AngularEditorModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    WrapperComponent,
  ],
  templateUrl: './html-editor.component.html',
  styleUrls: ['./html-editor.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class HtmlEditorComponent implements OnChanges {
  readonly form: FormGroup;

  readonly titleFC = new FormControl('', [Validators.required]);

  readonly editorFC = new FormControl('');

  readonly config: AngularEditorConfig = {
    ...TEXT_EDITOR_CONFIG,
    placeholder: 'Інформація про нас...',
  };

  @Input() isLoading = false;

  @Input() html?: Html | null;

  @Output() edited = new EventEmitter<Html>();

  constructor(private fb: FormBuilder) {
    this.form = fb.group({
      html: this.editorFC,
      title: this.titleFC,
    });
  }

  ngOnChanges(changes: SimpleChanges) {
    const html = changes['html']?.currentValue;

    if (html) {
      this.titleFC.setValue(html.title);
      this.editorFC.setValue(html.html);
    }
  }

  submitForm(): void {
    if (this.form.valid) {
      this.edited.emit(this.form.getRawValue());
    }
  }
}
