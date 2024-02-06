import { Injectable } from "@angular/core";

import { language } from "../../repo/language";
import { SelectLanguageService } from "./select-language.service";

@Injectable({providedIn: 'root'})
export class LanguageTranslateService extends SelectLanguageService {
    private langRepo: Object = {};

    constructor() {
        super();
        this.langRepo = language;
    }

    public translate(key: string): string {
        return this.keyIsExist(key) ?
            this.langRepo[key][this._langType] : key;
    }

    private keyIsExist(key: string): boolean {
        return !!this.langRepo[key];
    }
}