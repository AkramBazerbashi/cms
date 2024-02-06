import { NgModule } from '@angular/core';
import { ClickOutsideDirective } from './click-outside.directive';
import { DynamicDirective } from './dynamic.directive';
import { EmailValidatorDirective } from './email-validator.directive';
import { FormControlValidationDirective } from './form-control-validation.directive';
import { FormSubmitValidationDirective } from './form-submit-validation.directive';
import { ImageLazyLoadingDirective } from './image-lazy-loading.directive';
import { PasswordConfirmValidatorDirective } from './password-confirm-validator.directive';
import { PhoneNumberValidatorDirective } from './phone-number-validator.directive';
import { ScrollDirective } from './scroll.directive';

const sharedDirectives = [
    PhoneNumberValidatorDirective,
    EmailValidatorDirective,
    DynamicDirective, 
    ScrollDirective,
    FormControlValidationDirective, 
    FormSubmitValidationDirective,
    ImageLazyLoadingDirective,
    ClickOutsideDirective,
    PasswordConfirmValidatorDirective
]

@NgModule({
    declarations: [
        ...sharedDirectives
    ],
    imports: [],
    exports: [
        ...sharedDirectives
    ],
    providers: [],
})
export class NgxDirectivesModule { }
