import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";

@Injectable({providedIn: 'root'})
export class FilterService {
    private filterStateSubject$: BehaviorSubject<boolean> = new BehaviorSubject(false);
    
    constructor() {}

    public getFilterBarStatus(): Observable<boolean> {
        return this.filterStateSubject$.asObservable();
    }

    public setFilterBarStatus(status: boolean): void {
        this.filterStateSubject$.next(status);
    }
}