import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { InstallmentsObjectModel } from '../../../../../pages/manage-courses/models/installments-objects.model';
import { InstallmentObject } from '../../../../../pages/manage-courses/modules/courses';
import { deepCopy } from '../../../../utils/objects.util';
import { Installment } from '../../interfaces';

@Component({
  selector: 'ngx-installments-list',
  templateUrl: './installments-list.component.html',
  styleUrls: ['./installments-list.component.scss']
})
export class InstallmentsListComponent implements OnInit {
  @Input() title: string = '';

  @Input('installments') 
  public set model(value: InstallmentObject[]) {
    this.installments = deepCopy(value);
  }
  
  @Output('installmentsChange') 
  public update: EventEmitter<InstallmentObject[]> = new EventEmitter()

  public installments: InstallmentObject[];

  constructor() { }

  ngOnInit(): void { }

  public onRemove(installment: Installment): void {
    this.installments.splice(installment.index, 1);
    this.onModelChange(this.installments);
  }

  public onAdd(): void {
    this.installments.push(new InstallmentsObjectModel());
    this.onModelChange(this.installments);
  }

  private onModelChange(value: InstallmentObject[]): void {
    this.model = value;
    this.update.emit(value)
  }
}
