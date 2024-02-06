import { Injectable } from '@angular/core';

@Injectable()
export class DialogConfig<D = any> {
    data?: D
}