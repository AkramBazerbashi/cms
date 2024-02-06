import { Directive, ElementRef, EventEmitter, Output } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

@Directive({
  selector: '[ngxScroll]'
})
export class ScrollDirective {
  @Output() scrollPosition: EventEmitter<number> = new EventEmitter<number>();

  private scrollEvent$: Subscription;

  constructor(private el: ElementRef) {
    // this.scrollEvent$ = Observable
    //   .fromEvent(this.el.nativeElement, 'scroll')
    //   .subscribe((e: any) => {
    //     this.scrollPosition.emit(e.target.scrollTop);
    //   });
  }
 
  ngOnDestroy() {
    this.scrollEvent$.unsubscribe();
  }
}
