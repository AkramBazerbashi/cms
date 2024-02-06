import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NbIconModule, NbSelectModule } from '@nebular/theme';
import { NgxPipesModule } from '../pipes';
import { TableHeaderCellComponent } from './components/table-header-cell/table-header-cell.component';
import { TablePaginatorComponent } from './components/table-pagintor/table-paginator.component';
import { TableComponent } from './components/table/table.component';
import { SharedModule } from '../../shared.module';

const sharedComponents = [
    TableComponent,
    TableHeaderCellComponent,
    TablePaginatorComponent,
]

@NgModule({
    declarations: [
        ...sharedComponents
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        NbIconModule,
        NbSelectModule,
        NgxPipesModule,
        SharedModule
        
    ],
    exports: [
        ...sharedComponents
    ],
    providers: [],
})
export class NgxTableModule { }
