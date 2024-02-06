import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NbAccordionModule, NbCheckboxModule, NbDatepickerModule, NbIconModule, NbInputModule, NbSelectModule } from '@nebular/theme';
import { AccrodionFilterComponent } from './components/accrodion-filter/accrodion-filter.component';
import { SidebarFilterComponent } from './components/sidebar-filter/sidebar-filter.component';
import { ButtonsFilterComponent } from './components/buttons-filter/buttons-filter.component';
import { NgxPipesModule } from '../pipes';
import { NgxItemSelectorModule } from '../item-selector/item-selector.module';

const sharedComponents = [
    AccrodionFilterComponent,
    SidebarFilterComponent,
    ButtonsFilterComponent
]

@NgModule({
    declarations: [
        ...sharedComponents,
    ],
    imports: [
        CommonModule,
        FormsModule,
        NbAccordionModule,
        NbIconModule,
        NbSelectModule,
        NbCheckboxModule,
        NbInputModule,
        NgxPipesModule,
        NgxItemSelectorModule,
        NbDatepickerModule
    ],
    exports: [
        ...sharedComponents
    ],
    providers: [],
})
export class NgxDataFilterModule { }
