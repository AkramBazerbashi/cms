import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, Validator } from '@angular/forms';

@Directive({
  selector: '[ngxPhoneNumberValidator]',
  providers: [{
    provide: NG_VALIDATORS,
    useExisting: PhoneNumberValidatorDirective,
    multi: true
  }]
})
export class PhoneNumberValidatorDirective implements Validator {
  private readonly phoneRegx: RegExp = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
  private readonly invalidLocalMessage = { 'invalid-local-phone-number': true };
  private readonly invalidGlobalMessage = { 'invalid-global-phone-number': true };

  validate(control: AbstractControl): {[key: string]: any} | null {
    if(!control.value) return null;
    if(!this.phoneRegx.test(control.value)) return this.invalidLocalMessage;

    if(this.phoneRegx.test(control.value)) {
      if(!this.checkGlobalPhoneNumber(control.value) && !this.checkLocalPhoneNumber(control.value)) {
        return this.invalidGlobalMessage;
      }
      if(!this.checkLocalPhoneNumber(control.value) && !this.checkGlobalPhoneNumber(control.value)) {
        return this.invalidLocalMessage;
      }

      return null;
    }
  }

  private checkGlobalPhoneNumber(value: string): boolean {
    return value.includes('+') && (value.length == 14 || value.length == 13)
  }

  private checkLocalPhoneNumber(value: string): boolean {
    return value.length == 10
  }
}
