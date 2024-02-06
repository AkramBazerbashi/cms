import { Component, Input, OnInit } from '@angular/core';
@Component({
  selector: 'ngx-user-small-card',
  styleUrls: ['./user-small-card.component.scss'],
  template: `
    <div class="user-card">
      <div class="user-card__wallpaper">
        <img height="45" width="45" [lazyLoad]="data.imgSrc" errorImage="../../../../../assets/images/user-image.webp" defaultImage="../../../../../assets/images/user-image.webp">
      </div>
      <div class="user-card__content d-flex justify-content-center align-items-start flex-column">
        <p class="py-0 my-0 user-card__content-head text-nowrap">{{data.title}}</p>
        <p class="py-0 my-0 user-card__content-sub text-nowrap">{{data.subtitle}}</p>
      </div>
    </div>
  `
})
export class UserSmallCardComponent implements OnInit {
  @Input() data: {title: string, subtitle: string, imgSrc: string};
  constructor() {}
  ngOnInit(): void {}
}
