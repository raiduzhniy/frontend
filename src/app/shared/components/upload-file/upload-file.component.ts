import { CommonModule } from '@angular/common';
import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  ViewChild,
} from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { TransformAcceptTypesPipe } from './transform-accept-types.pipe';
import { UploadFileSelected } from './upload-file.interface';

@Component({
  selector: 'rdn-upload-file',
  standalone: true,
  imports: [CommonModule, MatButtonModule, TransformAcceptTypesPipe],
  templateUrl: './upload-file.component.html',
  styleUrls: ['./upload-file.component.scss'],
})
export class UploadFileComponent {
  @ViewChild('fileInput') fileInput: ElementRef<HTMLInputElement>;

  @Input() accept: string[];

  @Input() multiple = false;

  @Input() maxFileSize: number = 1e7;

  @Output() readonly selected = new EventEmitter<UploadFileSelected>();

  fileChangeEvent(event: Event): void {
    const { files } = (event as any)?.target;
    const filesArray: File[] = Array.from(files);
    const tooBigFile = filesArray.some(
      (file: File) => file.size >= this.maxFileSize
    );

    if (!tooBigFile) {
      this.selected.emit({ originalEvent: event, files: filesArray });
    }
  }

  reset(): void {
    this.fileInput.nativeElement.value = null;
  }
}
