import { Component, OnInit, OnDestroy } from '@angular/core';
import { NbLayoutScrollService } from '@nebular/theme';

@Component({
  selector: 'ngx-scroll-layout',
  styleUrls: ['./scroll-layout.component.scss'],
  template: `
    <div class="ngx-layout__scroll w-100">
      <ng-content></ng-content>
    </div>
  `
})
export class ScrollLayoutComponent implements OnInit, OnDestroy {
  constructor(private nbLayoutScrollService: NbLayoutScrollService) { }

  ngOnInit(): void { }

  ngOnDestroy() { }
  
}
