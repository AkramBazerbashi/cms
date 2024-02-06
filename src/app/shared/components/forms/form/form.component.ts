import { Component, Input } from '@angular/core';

@Component({
  selector: 'ngx-form',
  styleUrls: ['./form.component.scss'],
  template: `
    <!-- <div class="card ngx-form">
      <div class="ngx-form__header d-flex justify-content-between align-items-center">
        <div style="flex-grow: 8;" class="ngx-form__header-wrap">
          <h1 class="m-0 ngx-form__header-title">{{title | translate}}</h1>
          <p class="m-0 pt-2 ngx-form__header-subtitle" *ngIf="subTitle">
            {{subTitle | translate}}
          </p>
        </div>  
        <img style="flex-grow: 1;" 
          width="150" 
          height="100" 
          src="./assets/images/sa-for-training-logo.png" 
          alt="">
      </div>
      <ng-content></ng-content>
    </div> -->
    <div class="ngx-form card col-lg-6 col-md-8 col-sm-10 col-10 m-auto">
      <div class="ngx-form__header d-flex justify-content-between align-items-center">
        <div class="ngx-form__header-wrap">
          <h1 class="m-0 ngx-form__header-title">{{title}}</h1>
          <p class="m-0 pt-2 ngx-form__header-subtitle" *ngIf="subTitle">
            {{subTitle}}
          </p>
        </div>  
        <img width="150" height="100" src="./assets/img/logo.png" alt="logo" style="background-color: black;">
      </div>


      <div class="ngx-form__content">
        <ng-content></ng-content>
      </div>
    </div>
  `
})
export class FormComponent {
  @Input() readonly title: string = 'Form title';
  @Input() readonly subTitle: string = '';
}
