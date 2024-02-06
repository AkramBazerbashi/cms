import { Component, Input } from '@angular/core';

@Component({
  selector: 'ngx-page-subtitle',
  styleUrls: ['./page-subtitle.component.scss'],
  template: `
    <div class="page w-100 margin-top-md">
      <div class="w-100 mb-4 page__subtitle">
        <div class="page__subtitle-line"></div>
        <h5 style="text-transform: capitalize;" class="py-0 my-0 page__subtitle-text">
          {{subtitle}}
        </h5>
      </div>
      <ng-content></ng-content>
    </div>
  `
})
export class PageSubtitleComponent {
  @Input() subtitle: string = '';
  constructor() { }
}
