import { CommonModule } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import {
  MAT_DIALOG_DATA,
  MatDialogModule,
  MatDialogRef,
} from '@angular/material/dialog';
import {
  ImageCroppedEvent,
  ImageCropperModule,
  LoadedImage,
} from 'ngx-image-cropper';
import { ImageCropperDialogData } from './image-cropper-dialog.interface';

@Component({
  selector: 'rdn-image-cropper-dialog',
  standalone: true,
  imports: [CommonModule, ImageCropperModule, MatButtonModule, MatDialogModule],
  templateUrl: './image-cropper-dialog.component.html',
  styleUrls: ['./image-cropper-dialog.component.scss'],
})
export class ImageCropperDialogComponent {
  aspectRatio = this.data.aspectRatio || 1;

  imageChangedEvent: Event = this.data.imageChangedEvent;

  imageCroppedEvent: ImageCroppedEvent;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: ImageCropperDialogData,
    public dialogRef: MatDialogRef<ImageCropperDialogComponent>
  ) {}

  imageCropped(event: ImageCroppedEvent) {
    this.imageCroppedEvent = event;
  }
  imageLoaded(image: LoadedImage) {
    // show cropper
  }
  cropperReady() {
    // cropper ready
  }
  loadImageFailed() {
    // show message
  }

  confirm() {
    this.dialogRef.close({
      ...this.imageCroppedEvent,
      fileName: (this.imageChangedEvent.target as any).files[0].name,
    });
  }
}
