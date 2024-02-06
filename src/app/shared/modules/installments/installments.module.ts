import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InstallmentsListComponent } from './components/installments-list/installments-list.component';
import { InstallmentsItemComponent } from './components/installments-item/installments-item.component';
import { NbDatepickerModule, NbIconModule } from '@nebular/theme';
import { NgxPipesModule } from '../pipes';

const sharedComponents = [
  InstallmentsListComponent,
  InstallmentsItemComponent
]

@NgModule({
  declarations: [
    ...sharedComponents,
  ],
  imports: [
    CommonModule,
    FormsModule,
    NgxPipesModule,
    NbIconModule,
    ReactiveFormsModule,
    NbDatepickerModule,
  ],
  exports: [
    ...sharedComponents,
  ]
})
export class NgxInstallmentsModule { }
