import { CommonModule } from '@angular/common';
import { Component, Input, ViewEncapsulation } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { LoaderDirective } from '@shared/directives';

@Component({
  selector: 'rdn-wrapper',
  standalone: true,
  imports: [CommonModule, MatCardModule, LoaderDirective],
  templateUrl: './wrapper.component.html',
  styleUrls: ['./wrapper.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class WrapperComponent {
  @Input() isLoading = false;
}
