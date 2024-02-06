import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HandleResponseService } from './services';

@NgModule({
    imports: [
        CommonModule
    ],
    exports: [],
    providers: [
        HandleResponseService
    ],
})
export class NgxHandlerModule { }
