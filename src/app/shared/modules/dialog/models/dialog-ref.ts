import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable()
export class DialogRef {
    private readonly _afterClosed = new Subject<any>();

    public close(result?: any) {
        this._afterClosed.next(result)
    }
    
    public afterClosed: Observable<any> = this._afterClosed.asObservable()    
}