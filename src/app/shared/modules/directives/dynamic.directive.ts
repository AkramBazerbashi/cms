import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[ngxDynamic]'
})
export class DynamicDirective {

  constructor(
    public readonly viewContainerRef: ViewContainerRef
  ) { }

}
