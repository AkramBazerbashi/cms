import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { PaginatedResponse, PaginationValue } from '../../interfaces';

const initPaginationValue: PaginationValue = {
  page: 1,
  pageSize: 5,
  totalRows: 0
}

@Component({
  selector: 'ngx-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  
  @Output() checkedAll: EventEmitter<boolean> = new EventEmitter();
  @Output() sortFilter: EventEmitter<{status: number, title: string}> = new EventEmitter();
  @Output() onPaginationChange: EventEmitter<PaginationValue> = new EventEmitter();

  @Input() tableColumns: Array<{title: string, position: string}> = [];
  
  @Input()
  set paginationOptions(value: PaginationValue) {
    this.paginationValue = value;
    this.items = Array.from(Array(value.totalRows).keys(), (item) => item + 1)
    this.visibleItems = {
      items: this.items.slice(0, value.pageSize),
      total: value.totalRows,
    };
  }

  // Display options
  @Input() isCheckColumn: boolean = true;
  @Input() havePagination: boolean = true;

  private paginationValue: PaginationValue = initPaginationValue;
  private items = [];

  public readonly paginationControl: FormControl = new FormControl({
    page: 1,
    pageSize: this.paginationValue.pageSize
  });
  
  public visibleItems: PaginatedResponse<number> = {
    items: [1,2,3,4,5],
    total: initPaginationValue.totalRows
  };

  constructor() { }

  ngOnInit(): void {
    this.paginationControl.valueChanges.subscribe(this.onPageChange.bind(this));
  }

  public onPageChange(pagination: PaginationValue): void {
    const startIndex = (pagination.page - 1) * pagination.pageSize;

    const items = this.items.slice(
      startIndex,
      startIndex + pagination.pageSize
    );

    this.visibleItems = { items, total: this.items.length };
    this.onPaginationChange.emit(pagination);
  }
}