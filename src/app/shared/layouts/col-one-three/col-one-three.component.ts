import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-col-one-three',
  styleUrls: ['./col-one-three.component.scss'],
  template: `
    <div class="ngx-layout row px-0 mx-0 justify-content-between">
      <div class="col-md-4 pr-0 pr-md-3 pl-0 mx-0 col-pull-12 mt-md-0 mt-4 ngx-layout__col d-flex justify-content-start align-items-start flex-column">
        <ng-content select="[col_one]"></ng-content>
      </div>

      <div class="ngx-layout__col-three ngx-layout__col px-0 mx-0 col-md-8 col-push-12 mt-md-0 mt-4">
        <ng-content select="[col_three]"></ng-content>
      </div>
    </div>
  `
})
export class ColOneThreeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {}
}
