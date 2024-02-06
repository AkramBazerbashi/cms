import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemSelectorComponent } from './components/item-selector/item-selector.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NbIconModule, NbInputModule } from '@nebular/theme';
import { NgxDirectivesModule } from '../directives/directives.module';
import { SearchableDirective } from './directives/searchable.directive';
import { ResetSelectorService } from './service/reset-selector.service';

const sharedComponents = [
  ItemSelectorComponent,
  SearchableDirective,
]

@NgModule({
  declarations: [
    ...sharedComponents,
  ],
  exports: [
    ...sharedComponents
  ],
  imports: [
    CommonModule,
    FormsModule,
    NgxDirectivesModule,
    ReactiveFormsModule,
    NbIconModule,
    NbInputModule
  ],
  providers: [
    ResetSelectorService
  ]
})
export class NgxItemSelectorModule { }
