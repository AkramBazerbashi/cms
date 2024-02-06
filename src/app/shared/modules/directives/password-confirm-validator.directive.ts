import { Directive, Input } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, Validator } from '@angular/forms';

@Directive({ 
    selector: '[ngxPasswordConfirmValidator]',
    providers: [{
        provide: NG_VALIDATORS,
        useExisting: PasswordConfirmValidatorDirective,
        multi: true
    }] 
})
export class PasswordConfirmValidatorDirective implements Validator {
    @Input() public currentPassword: string;
    private readonly invalidMessage = { 'invalid-password-confirmation': true };  

    constructor() { }

    validate(control: AbstractControl): {[key: string]: any} | null {
        return this.currentPassword == control.value ? null : this.invalidMessage;
    }
}