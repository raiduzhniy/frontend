import { ImageCroppedEvent } from 'ngx-image-cropper';

export interface IImageCroppedEvent extends ImageCroppedEvent {
  fileName: string;
}
