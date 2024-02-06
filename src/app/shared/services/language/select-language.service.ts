import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { ISelectLanguage } from "./language.interface";

@Injectable({providedIn: 'root'})
export class SelectLanguageService implements ISelectLanguage {
    private _language: BehaviorSubject<string> = new BehaviorSubject('ar');
    protected _langType: string = 'ar';
    
    public getLanguage(): Observable<string> {
        return this._language.asObservable();
    }

    public setLanguage(languageType: string): void {
        this._language.next(languageType);
        this.languageChangeDetected();
    }

    private languageChangeDetected(): void {
        this.getLanguage().subscribe((type: string) => {
            this._langType = type;
        })
    }
}