import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-donut-chart-card',
  templateUrl: './donut-chart-card.component.html',
  styleUrls: ['./donut-chart-card.component.scss']
})
export class DonutChartCardComponent implements OnInit {
  @Input() colorSchema: any;
  @Input() dataSchema: any;
  @Input() nameSchema: any;
  @Input() name: string;
  @Input() totalCount: number;

  constructor() { }

  ngOnInit(): void {}
}
