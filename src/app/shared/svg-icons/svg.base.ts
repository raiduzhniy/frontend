import { Component, Input } from '@angular/core';

@Component({ template: '' })
export abstract class SvgBaseComponent {
  @Input() width?: number | string;
}
