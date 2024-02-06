import { Directive, ElementRef } from '@angular/core';

@Directive({ selector: 'imgLazyLoading' })
export class ImageLazyLoadingDirective {
  constructor({ nativeElement }: ElementRef<HTMLImageElement>) {
    const supports = 'loading' in HTMLImageElement.prototype;

    if (supports) {
      nativeElement.setAttribute('loading', 'lazy');
    }
  }
}