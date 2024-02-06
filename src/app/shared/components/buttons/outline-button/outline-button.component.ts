import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-outline-button',
  styleUrls: ['./outline-button.component.scss'],
  template: `
    <button type="button" [disabled]="disabled" [class]="color" [ngClass]="{'active': isActive}" class="outline__btn">
      <nb-icon *ngIf="icon" [icon]="icon" [pack]="pack"></nb-icon>
      {{title}}
    </button> 
  `
})
export class OutlineButtonComponent implements OnInit {
  @Input() title: string = '';
  @Input() pack: string = 'eva';
  @Input() isActive: boolean = false;
  @Input() icon: string;
  @Input() color: string
  @Input() disabled: boolean = false;
  
  constructor() {}

  ngOnInit(): void {
    null
  }
}
