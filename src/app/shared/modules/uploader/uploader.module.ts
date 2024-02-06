import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NbIconModule, NbToggleModule } from '@nebular/theme';
import { StoreModule } from '@ngrx/store';
import { NgxPipesModule } from '../pipes';
import { CardReviewerComponent } from './components/card-reviewer/card-reviewer.component';

import { CardUploaderComponent } from './components/card-uploader/card-uploader.component';
import { FormUploaderComponent } from './components/form-uploader/form-uploader.component';
import { IconUploaderComponent } from './components/icon-uploader/icon-uploader.component';
import { ProfileUploaderComponent } from './components/profile-uploader/profile-uploader.component';
import { filesReducers } from './store';

const components = [
    FormUploaderComponent,
    CardUploaderComponent,
    CardReviewerComponent,
    IconUploaderComponent,
    ProfileUploaderComponent
]

@NgModule({
    declarations: [...components],
    imports: [
        CommonModule,
        NbIconModule,
        NbToggleModule,
        NgxPipesModule,
        StoreModule.forFeature('files', filesReducers)
    ],
    exports: [...components],
    providers: [],
})
export class NgxFileUploaderModule { }
