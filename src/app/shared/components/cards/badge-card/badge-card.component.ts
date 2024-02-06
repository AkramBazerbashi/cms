import { Component, Input, OnInit } from '@angular/core';

interface IBadgeCardConfig {
  backGround: string;
  color: string;
}

@Component({
  selector: 'ngx-badge-card',
  styleUrls: ['./badge-card.component.scss'],
  template: `
    <div class="badge-card"
      [class]="getBackGroundColor(color)">
      <!-- <nb-icon icon="close-outline" pack="eva" class="text-light"></nb-icon> -->
      <p class="badge-card__title py-0 my-0">{{title}}</p>
    </div>
  `
})
export class BadgeCardComponent {
  @Input() title: string = '';
  @Input() color: string = '';

  private configs: IBadgeCardConfig[] = [
    { backGround: 'bg-success', color: 'success' },
    { backGround: 'bg-danger', color: 'danger' },
    { backGround: 'bg-dark', color: 'dark' },
    { backGround: 'bg-info', color: 'info' },
    { backGround: 'bg-green', color: 'green' },
    { backGround: 'bg-primary', color: 'primary' },
    { backGround: 'bg-warning', color: 'warning' },
    { backGround: 'bg-pink', color: 'pink' },
  ]

  constructor() { }

  public getBackGroundColor(color: string): string {
    return this.configs.find(config => config.color == color).backGround
  }
}
