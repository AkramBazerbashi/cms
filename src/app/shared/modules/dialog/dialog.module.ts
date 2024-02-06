import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DialogComponent } from './components/dialog.component';
import { InsertionDirective } from './directives/insertion.directive';
import { NbIconModule, NbOptionModule, NbSelectModule } from '@nebular/theme';
import { DialogConfig, DialogRef } from './models';

@NgModule({
    declarations: [
        DialogComponent,
        InsertionDirective
    ],
    imports: [
        CommonModule,
        NbSelectModule,
        NbOptionModule,
        NbIconModule,
        DialogComponent
    ],
    // entryComponents: [
    //     DialogComponent
    // ],
    providers: [
        DialogConfig,
        DialogRef
    ],
    exports: [],
})
export class NgxDialogModule { }
