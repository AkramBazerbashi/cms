import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NbAccordionModule, NbCardModule, NbCheckboxModule, NbRadioModule, NbSelectModule } from '@nebular/theme';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { BaseComponent } from './components/base.component';
import { CONTENT_COMPONENTS, CONTENT_MAPPINGS_PROVIDER } from './constants';
import { CreateDynamicComponentsService } from './services';

@NgModule({
    declarations: [
        BaseComponent,
    ],
    // entryComponents: [
    //     ...CONTENT_COMPONENTS
    // ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        NbAccordionModule,
        NbCardModule,
        NbSelectModule,
        NbRadioModule,
        NbCheckboxModule,
    ],
    exports: [BaseComponent],
    providers: [
        CreateDynamicComponentsService,
        ...CONTENT_MAPPINGS_PROVIDER
    ],
})
export class NgxNestedComponentsModule { }
