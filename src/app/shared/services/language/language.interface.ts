import { Observable } from "rxjs";

export interface ISelectLanguage {
    getLanguage(): Observable<any>;
    setLanguage(lang: string): void;
}