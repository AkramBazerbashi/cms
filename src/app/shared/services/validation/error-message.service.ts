import { Injectable } from "@angular/core";
import { errors } from "../../repo/errors";

@Injectable({providedIn: 'root'})
export class ValidationErrorMessageService {
    private _errorMessages: { [key: string]: string } = errors;
    
    public getValidationMessage(validationMessageId: string): string {
        return this._errorMessages[validationMessageId];
    }
}