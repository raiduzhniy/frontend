import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { WrapperComponent } from '@shared/components';

@Component({
  selector: 'rdn-news-processing',
  standalone: true,
  imports: [CommonModule, WrapperComponent],
  templateUrl: './news-processing.component.html',
  styleUrls: ['./news-processing.component.scss'],
})
export class NewsProcessingComponent {
  isEditMode: boolean;
  constructor(private route: ActivatedRoute) {
    this.isEditMode = route.snapshot.data['isEditMode'];
  }
}
