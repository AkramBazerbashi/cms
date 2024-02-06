import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NbCardModule, NbIconModule, NbSidebarModule, NbTabsetModule } from '@nebular/theme';

import { FilterBarComponent } from './components/filter-bar/filter-bar.component';
import { CategorySidebarService } from './services/category-sidebar.service';
import { NgxFileUploaderModule } from '../uploader';
import { StoreModule } from '@ngrx/store';
import { sidebarsReducers } from './store';
import { EffectsModule } from '@ngrx/effects';
import { SidebarEffects } from './store/effects';
import { NgxDirectivesModule } from '../directives/directives.module';
import { NgxHandlerModule } from '../handler/handler.module';
// import { NgxDialogModule } from '../dialog/dialog.module';

const sharedComponents = [
    FilterBarComponent
]

@NgModule({
    declarations: [
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        NbSidebarModule,
        NbTabsetModule,
        NbCardModule,
        NgxFileUploaderModule,
        NgxDirectivesModule,
        NbIconModule,
        NgxHandlerModule,
        // NgxDialogModule,
        StoreModule.forFeature('sidebars', sidebarsReducers),
        EffectsModule.forFeature([
            SidebarEffects
        ])
    ],
    exports: [
    ],
    providers: [
        CategorySidebarService
    ],
})
export class NgxSidebarsModule { }
