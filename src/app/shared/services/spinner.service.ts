import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs-compat';

@Injectable({
  providedIn: 'root'
})
export class SpinnerService {

  spinnerState: BehaviorSubject<boolean>= new BehaviorSubject<boolean>(false);
  constructor() { }
}
