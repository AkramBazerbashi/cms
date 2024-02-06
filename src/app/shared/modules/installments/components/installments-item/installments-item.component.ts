import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { InstallmentObject } from '../../../../../pages/manage-courses/modules/courses';

interface Installment { installment: InstallmentObject; index: number };

@Component({
  selector: 'ngx-installments-item',
  templateUrl: './installments-item.component.html',
  styleUrls: ['./installments-item.component.scss']
})
export class InstallmentsItemComponent implements OnInit {
  @Input() installmentIndex: number;
  @Input() isFirst: boolean = false;

  @Input('installment') model: InstallmentObject;
  @Output('installmentChange') update: EventEmitter<InstallmentObject> = new EventEmitter()

  @Output()
  onRemove: EventEmitter<Installment> = new EventEmitter<Installment>();

  constructor() { }

  ngOnInit(): void { }

  public onModelChange(value: InstallmentObject): void {
    this.model = value;
    this.update.emit(value)
  }
}
