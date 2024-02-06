import { Directive, ElementRef, HostListener, Input, OnDestroy, OnInit } from '@angular/core';
import { NgControl } from '@angular/forms';
import { Subscription } from 'rxjs';
import { ValidationErrorMessageService } from '../../services/validation/error-message.service';

@Directive({
  selector: '[ngxFormControlValidation]'
})
export class FormControlValidationDirective implements OnInit, OnDestroy {
  @Input() validationMessageId: string;
  errorSpanId: string = '';

  private statusChangeSubscription: Subscription;

  constructor(
    private readonly elementRef: ElementRef,
    private readonly ngControl: NgControl,
    private readonly validationErrorMessageService: ValidationErrorMessageService
  ) { }

  ngOnInit(): void {
    this.errorSpanId = `${this.validationMessageId}${Date.now()}-error-msg`;
    this.statusChangeSubscription = this.ngControl
      .statusChanges
      .subscribe(status => {
        if(status == 'INVALID') this.showError();
        else this.removeError();
      })
  }

  ngOnDestroy(): void {
    this.statusChangeSubscription.unsubscribe();
  }

  /** 
   * This is needed to handle the case of clicking a required field and moving out.
   * Rest all are handled by status change subscription
  */
  @HostListener('blur', ["$event"])
  handleBlurEvent(event: any) {
    if (this.ngControl.value == null || this.ngControl.value == '') {
      if (this.ngControl.errors) this.showError();
      else this.removeError();
    }
  }

  private showError() {
    this.removeError();

    const firstKey: string = Object.keys(this.ngControl.errors)[0];
    const errorMessageKey = `${this.validationMessageId}-${firstKey}`;

    const errorMessage = this.validationErrorMessageService.getValidationMessage(errorMessageKey);
    const errorSpan = this.messageGenerator(this.errorSpanId, errorMessage)
    
    this.elementRef.nativeElement.parentElement.insertAdjacentHTML('beforeend', errorSpan);
  }

  private removeError(): void {
    const errorElement = document.getElementById(this.errorSpanId);
    if (errorElement) errorElement.remove();
  }

  private messageGenerator(id: string, message: string): string {
    return `<p class="text text-danger text-nowrap m-0 pb-0 pt-1" id="${id}"> ${message} </p>`;
  }
}
