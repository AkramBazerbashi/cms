import { Injectable, ElementRef, ViewChild } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';

import { Observable } from 'rxjs';
import {finalize} from 'rxjs/operators';
import { SpinnerService } from '../services/spinner.service';
// import { NgxSpinnerService } from 'ngx-spinner';

@Injectable()
export class SpinnerInterceptorInterceptor implements HttpInterceptor {
  constructor(
    // private spinner: NgxSpinnerService
    private spinnerService: SpinnerService
    ) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    // this.spinner.show();
    this.spinnerService.spinnerState.next(true);
    return next.handle(request).pipe(finalize (()=>{
    this.spinnerService.spinnerState.next(false);
    // this.spinner.hide();
    }));
  }
}
