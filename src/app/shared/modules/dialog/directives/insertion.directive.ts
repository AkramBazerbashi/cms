import { Directive, ViewContainerRef } from '@angular/core';

@Directive({ selector: '[ngxAppInsertion]' })
export class InsertionDirective {
    constructor(public viewContainerRef: ViewContainerRef) {}
}