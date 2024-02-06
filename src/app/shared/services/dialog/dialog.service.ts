import { Injectable } from '@angular/core';

import { Observable, Subject } from 'rxjs';
import { IDialog } from '../../interfaces/dialog.interface';

@Injectable({ providedIn: 'root' })
export class NgxDialogService {
    private subject$: Subject<IDialog> = new Subject();

    public open(dialog: IDialog): void {
        this.subject$.next(dialog);
    }

    public onOpen(): Observable<IDialog> {
        return this.subject$.asObservable()
    }

    public onClose(): Observable<IDialog> {
        return this.subject$.asObservable();
    }
}