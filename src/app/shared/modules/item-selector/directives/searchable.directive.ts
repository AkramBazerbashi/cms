import { Directive, AfterViewInit, ViewContainerRef, ElementRef } from '@angular/core';

@Directive({ selector: '[searchable]' })
export class SearchableDirective implements AfterViewInit {
    constructor() { }

    ngAfterViewInit(): void { }
}