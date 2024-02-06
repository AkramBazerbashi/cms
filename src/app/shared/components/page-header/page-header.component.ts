import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-page-header',
  styleUrls: ['./page-header.component.scss'],
  template: `
    <div class="d-flex flex-wrap justify-content-between align-items-center">
      <div class="mb-4 w-100 d-flex flex-wrap justify-content-between align-items-center">
        <div>
          <h3 class="p-0 m-0 text text-green" style="font-size: 24px;">{{headerTitle}}</h3>
          <ngx-breadcrumb></ngx-breadcrumb>
        </div>
        <div class="mt-sm-0 mt-3 d-flex flex-wrap justify-content-between align-items-center">
          <ng-content select="[button, ngx-outline-button]"></ng-content>
        </div>
      </div>

      <ng-content></ng-content>
    </div>
  `
})
export class PageHeaderComponent implements OnInit {
  @Input() headerTitle: string = '';

  constructor() { }

  ngOnInit(): void {}
}
