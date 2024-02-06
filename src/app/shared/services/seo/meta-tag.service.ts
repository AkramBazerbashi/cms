import { Inject, Injectable } from "@angular/core";
import { NB_DOCUMENT } from "@nebular/theme";

@Injectable({providedIn: 'root'})
export class MetaTagService {
    private readonly dom: Document
    
    constructor(
        @Inject(NB_DOCUMENT) document
    ) {
        this.dom = document;
    }

    public setMetaTitle(title: string): void {
        this.dom.title = title;
    }
}