import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'ngx-buttons-filter',
  templateUrl: './buttons-filter.component.html',
  styleUrls: ['./buttons-filter.component.scss']
})
export class ButtonsFilterComponent implements OnInit {
  @Output() onReset: EventEmitter<void> = new EventEmitter<void>();
  @Output() onSubmit: EventEmitter<void> = new EventEmitter<void>();

  constructor() { }

  ngOnInit(): void {}

}
