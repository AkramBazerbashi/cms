import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'ngx-table-header-cell',
  styleUrls: ['./table-header-cell.component.scss'],
  template: `
    <div class="header-cell">
      <div class="header-cell__item">
        <p class="py-0 my-0 text text-bold text-small text-nowrap">
          {{title | ngxRemoveUnderscore | ngxCapitalize}}
        </p>
        <a (click)="filterStatus.emit({status: 1, title})" 
          class="header-cell__item-arrow header-cell__item-arrow-top"></a>
        <a (click)="filterStatus.emit({status: -1, title})" 
          class="header-cell__item-arrow header-cell__item-arrow-bottom"></a>
      </div>
    </div>
  `
})
export class TableHeaderCellComponent {
  @Input() title: string = '';
  @Output() filterStatus: EventEmitter<{ status: number, title: string }> = new EventEmitter();
  constructor() { }
}
