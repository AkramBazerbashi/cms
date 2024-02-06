import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { Observable, of } from "rxjs";
import { IAppState } from "../../../store/reducers";
import { selectLoaderStatus } from "../../store";

@Component({
    selector: 'ngx-loader',
    styleUrls: ['./loader.component.scss'],
    template: `
        <div class="loader-wrapper" [style]="{ 'display': (isLoading|async) ? 'flex' : 'none'}">
            <div class="lds-spinner">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    `
})
export class LoaderComponent implements OnInit {
    constructor(
        private readonly store: Store<IAppState>
    ) {}
    
    public isLoading: Observable<boolean> = of(false);

    ngOnInit() {
       this.isLoading = this.store.select(selectLoaderStatus)
    }
}