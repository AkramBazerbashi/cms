import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-content-layout',
  styleUrls: ['./content-layout.component.scss'],
  template: `
    <div class="content-layout">
      <ng-content></ng-content>
    </div>
  `
})
export class ContentLayoutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
