import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable()
export class ResetSelectorService {
    private _subject: Subject<boolean> = new Subject();

    public reset(): void {
        this._subject.next(true);
    }

    public getStatus(): Observable<boolean> {
        return this._subject.asObservable();
    }
}