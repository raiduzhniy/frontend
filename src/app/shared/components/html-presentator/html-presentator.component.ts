import { CommonModule } from '@angular/common';
import { Component, Input, ViewEncapsulation } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { WrapperComponent } from '@shared/components';
import { Html } from '@shared/interfaces';

@Component({
  selector: 'rdn-html-presentator',
  standalone: true,
  imports: [CommonModule, MatCardModule, WrapperComponent],
  templateUrl: './html-presentator.component.html',
  styleUrls: ['./html-presentator.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class HtmlPresentatorComponent {
  @Input() htmlData?: Html | null;

  @Input() isLoading = false;
}
