import { 
    Directive, 
    HostListener, 
    ElementRef, 
    EventEmitter, 
    Output 
} from '@angular/core';

@Directive({ selector: '[ngxClickOutside]' })
export class ClickOutsideDirective {
    private clickCounter: number = 0;
    @Output() ngxClickOutside = new EventEmitter<boolean>();

    @HostListener('document:click', ['$event.target'])
    public onClick(target: Event) {
        const clickedInside = this.elementRef.nativeElement.contains(target);
        if (clickedInside) return;

        this.clickCounter++;
        if(this.clickCounter > 1) {
            this.clickCounter = 0;
            this.ngxClickOutside.emit(false);
        }
    }

    constructor(private elementRef: ElementRef) { }
}