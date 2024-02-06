import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TagsListComponent } from './components/tags-list/tags-list.component';
import { NbTagModule } from '@nebular/theme';

const sharedComponents = [
  TagsListComponent
]

@NgModule({
  declarations: [
    ...sharedComponents
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NbTagModule
  ],
  exports: [
    ...sharedComponents
  ]
})
export class NgxTagsModule { }
