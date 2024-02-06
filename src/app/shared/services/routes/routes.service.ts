import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable, Subject } from "rxjs";
import { IBreadcrumb } from "../../interfaces/breadcrumb.interface";

@Injectable({providedIn: 'root'})
export class RoutesService {
    private routesSubject$: BehaviorSubject<IBreadcrumb[]> = new BehaviorSubject([]);
    constructor() {}

    public getRoutes(): Observable<IBreadcrumb[]> {
        return this.routesSubject$.asObservable();
    }

    public setRoutes(routes: IBreadcrumb[]): void {
        this.routesSubject$.next(routes);
    }
}