import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CmsRoutingModule } from './cms-routing.module';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [],
  imports: [
    //CommonModule,
    CmsRoutingModule,
    SharedModule
  ]
})
export class CmsModule { }
