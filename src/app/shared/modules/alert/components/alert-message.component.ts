import { Component, OnDestroy, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";

import { Subscription } from "rxjs";
import { filter } from 'rxjs/operators';

import { IAppState } from "../../../../store/reducers";
import { IAlertMessage, IAlertOptions } from "../interfaces";
import { selectMessage } from "../store";

@Component({
    selector: 'ngx-alert-message',
    styleUrls: ['./alert-message.component.scss'],
    templateUrl: './alert-message.component.html'
})
export class AlertMessageComponent implements OnInit, OnDestroy {
    private subscription$: Subscription;
    public alertList: IAlertMessage[] = [];

    constructor(
        private readonly store: Store<IAppState>
    ) {}
    
    ngOnInit(): void {
        this.subscription$ = this.store
            .select(selectMessage)
            .pipe(filter(message => message.subtitle.length > 0))
            .subscribe((message: IAlertMessage) => {
                const alert = { ...message };
                alert.options = { ...this.getAlertOptions(alert?.status) }
                this.alertList.push({ ...alert });
                setTimeout(() => this.alertList.shift(), 6000);
            })
    }
    
    private getAlertOptions(status: string): IAlertOptions {
        let icon = '';
        let bgCard = '';
        let bgIcon = '';
        switch (status) {
            case 'success':
                icon = 'checkmark-outline';
                bgCard = '#4EC33D';
                bgIcon = '#2C7721';
                break;
            case 'danger':
                icon = 'close-outline';
                bgCard = '#F64B3C';
                bgIcon = '#C81912';
                break;
            case 'info':
                icon = 'question-mark-outline';
                bgCard = '#65ACF0';
                bgIcon = '#2A72C3';
                break;
            case 'warning':
                icon = 'at-outline';
                bgCard = '#F9943B';
                bgIcon = '#C37602';
                break;
            default:
                icon = 'close-outline';
                bgCard = '#F64B3C';
                bgIcon = '#C81912';
                break;
        }
        return { icon, bgCard, bgIcon };
    }

    ngOnDestroy(): void {
        this.subscription$.unsubscribe();
    }
}