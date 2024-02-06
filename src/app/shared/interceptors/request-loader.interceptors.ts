import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { finalize } from "rxjs/operators";
import { ISharedState, setLoaderAction } from "../store";

@Injectable({ providedIn: 'root' })
export class RequestLoaderInterceptor implements HttpInterceptor {
    constructor(
        private readonly store: Store<ISharedState>
    ) {}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        this.store.dispatch(setLoaderAction({ status: true }))
        return next.handle(req).pipe(
            finalize(() => this.store.dispatch(setLoaderAction({ status: false })))
        )
    }
}