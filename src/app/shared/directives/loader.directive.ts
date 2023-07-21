import {
  Directive,
  ElementRef,
  Input,
  OnChanges,
  Renderer2,
  SimpleChanges,
  ViewContainerRef,
} from '@angular/core';
import { LogoWithoutLabelIconComponent } from '@shared/svg-icons';

@Directive({
  selector: '[rdnLoader]',
  standalone: true,
})
export class LoaderDirective implements OnChanges {
  private readonly loaderElem: HTMLDivElement =
    this.renderer2.createElement('div');

  private readonly iconComponent = this.vcr.createComponent(
    LogoWithoutLabelIconComponent
  );

  @Input() rdnLoader = false;

  constructor(
    private elRef: ElementRef,
    private renderer2: Renderer2,
    private vcr: ViewContainerRef
  ) {
    this.generateLoader();
  }

  ngOnChanges(changes: SimpleChanges) {
    const isLoading = changes['rdnLoader'].currentValue;

    if (isLoading) {
      this.attachLoader();
    } else {
      this.deattachLoader();
    }
  }

  private generateLoader() {
    this.renderer2.addClass(this.loaderElem, 'rnd-loader__main');

    this.renderer2.appendChild(
      this.loaderElem,
      this.iconComponent.location.nativeElement
    );
  }

  private get isParentRelative(): boolean {
    return this.loaderElem.offsetParent === this.elRef.nativeElement;
  }

  private attachLoader(): void {
    this.renderer2.appendChild(this.elRef.nativeElement, this.loaderElem);
    if (!this.isParentRelative) {
      this.renderer2.setStyle(this.elRef.nativeElement, 'position', 'relative');
    }
  }

  private deattachLoader(): void {
    this.renderer2.removeChild(this.elRef.nativeElement, this.loaderElem);
  }
}
