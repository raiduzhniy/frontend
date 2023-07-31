import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Component, OnDestroy, ViewChild } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import {
  AngularEditorConfig,
  AngularEditorModule,
} from '@kolkov/angular-editor';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { UploadFileComponent, WrapperComponent } from '@shared/components';
import { ImageCropperDialogComponent } from '@shared/components/dialogs/image-cropper-dialog/image-cropper-dialog.component';
import { ImageCropperDialogData } from '@shared/components/dialogs/image-cropper-dialog/image-cropper-dialog.interface';
import { UploadFileSelected } from '@shared/components/upload-file';
import { IImageCroppedEvent } from '@shared/interfaces';
import { NewsFacade } from '@state/news';
import { ImageCropperModule } from 'ngx-image-cropper';
import { filter, take } from 'rxjs';
import { TEXT_EDITOR_CONFIG } from '../../../../constants/editor.constant';

@Component({
  selector: 'rdn-news-processing',
  standalone: true,
  imports: [
    CommonModule,
    WrapperComponent,
    ImageCropperModule,
    MatButtonModule,
    AngularEditorModule,
    FormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatDialogModule,
    NgOptimizedImage,
    MatIconModule,
    UploadFileComponent,
  ],
  providers: [NewsFacade],
  templateUrl: './news-processing.component.html',
  styleUrls: ['./news-processing.component.scss'],
})
@UntilDestroy()
export class NewsProcessingComponent implements OnDestroy {
  readonly isLoadingNews$ = this.newsFacade.isLoadingNews$;

  readonly news$ = this.newsFacade.news$;

  readonly form: FormGroup;

  readonly titleFC = new FormControl('', [Validators.required]);

  readonly editorFC = new FormControl('');

  readonly fileFC = new FormControl<Blob>(undefined);

  readonly config: AngularEditorConfig = {
    ...TEXT_EDITOR_CONFIG,
    placeholder: 'Додати текст новини...',
  };

  newsId: string;

  selectedImage: string;

  @ViewChild(UploadFileComponent) uploadFileComponent: UploadFileComponent;

  constructor(
    private route: ActivatedRoute,
    private sanitizer: DomSanitizer,
    private fb: FormBuilder,
    private dialog: MatDialog,
    private newsFacade: NewsFacade
  ) {
    this.newsId =
      route.snapshot.data['isEditMode'] && route.snapshot.params['newsId'];

    this.form = fb.group({
      html: this.editorFC,
      title: this.titleFC,
      image: this.fileFC,
    });

    if (this.newsId) {
      this.getNewsToEdit();
    }
  }

  selectedFile(fileSelectedEvent: UploadFileSelected): void {
    const dialog = this.dialog.open<
      ImageCropperDialogComponent,
      ImageCropperDialogData
    >(ImageCropperDialogComponent, {
      data: {
        imageChangedEvent: fileSelectedEvent.originalEvent,
      },
    });

    dialog
      .afterClosed()
      .pipe(
        take(1),
        untilDestroyed(this),
        filter(event => !!event)
      )
      .subscribe((croppedEvent: IImageCroppedEvent) => {
        this.uploadFileComponent.reset();
        const file = new File([croppedEvent.blob], croppedEvent.fileName, {
          type: 'image/jpeg',
        });
        this.fileFC.setValue(file);
        this.selectedImage = this.sanitizer.bypassSecurityTrustUrl(
          croppedEvent.objectUrl
        ) as string;
      });
  }

  submitForm(): void {
    if (this.form.valid) {
      const formData = new FormData();

      Object.entries(this.form.getRawValue()).forEach(([key, value]) => {
        if (value !== undefined) {
          formData.set(key, value as string | Blob);
        }
      });

      if (this.newsId) {
        this.newsFacade.dispatchUpdateNews(this.newsId, formData);
      } else {
        this.newsFacade.dispatchCreateNews(formData);
      }
    }
  }

  resetImage(): void {
    this.fileFC.setValue(null);
    this.selectedImage = null;
  }

  private getNewsToEdit(): void {
    this.news$
      .pipe(
        filter(news => !!news),
        take(1),
        untilDestroyed(this)
      )
      .subscribe(({ title, html, imageUrl }) => {
        this.titleFC.setValue(title);
        this.editorFC.setValue(html);
        this.selectedImage = imageUrl;
      });

    this.newsFacade.dispatchGetNews(this.newsId);
  }

  ngOnDestroy() {
    this.newsFacade.dispatchResetState();
  }
}
