import { CoreModule } from '@abp/ng.core';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { NgModule } from '@angular/core';
import { ThemeSharedModule } from '@abp/ng.theme.shared';
import { NgxValidateCoreModule } from '@ngx-validate/core';
import { InputComponent } from './components/forms/input/input.component';
import { FormComponent } from './components/forms/form/form.component';
import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component';
import { OutlineButtonComponent } from './components/buttons/outline-button/outline-button.component';
import { UserSmallCardComponent } from './components/cards/user-small-card/user-small-card.component';
import { BadgeCardComponent } from './components/cards/badge-card/badge-card.component';
import { ContentLayoutComponent } from './layouts/content-layout/content-layout.component';
import { PageHeaderComponent } from './components/page-header/page-header.component';
import { PageSubtitleComponent } from './components/page-subtitle/page-subtitle.component';
import { ColOneThreeComponent } from './layouts/col-one-three/col-one-three.component';
import { PopupFullComponent } from './components/popup-full/popup-full.component';
import { DynamicTabsComponent } from './components/dynamic/dynamic.component';
import { ScrollLayoutComponent } from './layouts/scroll-layout/scroll-layout.component';
import { EchartsRadarComponent } from './components/charts/echarts-radar.component';
import { DonutChartComponent } from './components/charts/donut-chart.component';
import { DonutChartCardComponent } from './components/cards/donut-chart-card/donut-chart-card.component';
import { HorizontalLineChartCardComponent } from './components/cards/horizontal-line-chart-card/horizontal-line-chart-card.component';
import { HorizontalLineChartComponent } from './components/charts/horizontal-line-chart.component';
import { PaymentChartCardComponent } from './components/cards/payment-chart-card/payment-chart-card.component';
import { LoaderComponent } from './components/loader/loader.component';
import { ConfirmActionComponent } from './components/cards/confirm-action/confirm-action.component';
import { ListActionsComponent } from './components/cards/list-actions/list-actions.component';
import { AddItemCardComponent } from './components/cards/add-item-card/add-item-card.component';
import { ConfirmDeleteComponent } from './components/confirm-delete/confirm-delete.component';
import { SafePipe } from './pipes/sanitizer';
import { LongTextDialogComponent } from './components/long-text-dialog/long-text-dialog.component';
import { ArrayToListDialogComponent } from './components/array-to-list-dialog/array-to-list-dialog.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NbAccordionModule, NbActionsModule, NbAlertModule, NbBadgeModule, NbCardModule, NbCheckboxModule, NbIconModule, NbInputModule, NbOptionModule, NbPopoverModule, NbRadioModule, NbSelectModule, NbTabsetModule, NbTagModule, NbToggleModule } from '@nebular/theme';
import { RouterModule } from '@angular/router';
import { NgxFileUploaderModule } from './modules/uploader';
import { NgxPipesModule } from './modules/pipes';
import { NgxDirectivesModule } from './modules/directives/directives.module';
import { NgxNestedComponentsModule } from './modules/nested-components';
import { NgxEchartsModule } from 'ngx-echarts';
import { LazyLoadImageModule } from 'ng-lazyload-image';
// import { NgxSliderModule } from '@angular-slider/ngx-slider';
import { StoreModule } from '@ngrx/store';
import { SharedEffects, sharedReducers } from './store';
import { EffectsModule } from '@ngrx/effects';
import { CommonModule } from '@angular/common';

const sharedComponents = [
  InputComponent,
  FormComponent,
  BreadcrumbComponent,
  OutlineButtonComponent,
  UserSmallCardComponent,
  BadgeCardComponent,
  ContentLayoutComponent,
  PageHeaderComponent,
  PageSubtitleComponent,
  ColOneThreeComponent,
  PopupFullComponent,
  DynamicTabsComponent,
  ScrollLayoutComponent,
  EchartsRadarComponent,
  DonutChartComponent,
  DonutChartCardComponent,
  HorizontalLineChartCardComponent,
  HorizontalLineChartComponent,
  PaymentChartCardComponent,
  LoaderComponent,
  ConfirmActionComponent,
  ListActionsComponent,
  AddItemCardComponent,
  ConfirmDeleteComponent,
  SafePipe
  
];

@NgModule({
  declarations: [
    ...sharedComponents,
    LongTextDialogComponent,
    ArrayToListDialogComponent
  ],
  imports: [
    CommonModule,
    CoreModule,
    ThemeSharedModule,
    NgxValidateCoreModule,
    FormsModule,
    NbAlertModule,
    NbCheckboxModule,
    NbIconModule,
    NbOptionModule,
    NbBadgeModule,
    ReactiveFormsModule,
    NbInputModule,
    NgxEchartsModule,
    NbSelectModule,
    NbToggleModule,
    // ChartModule, not IVY
    NbCardModule,
    RouterModule,
    NgxFileUploaderModule,
    NgxPipesModule,
    NbAccordionModule,
    NbTagModule,
    NbTabsetModule,
    NbPopoverModule,
    NbRadioModule,
    NbActionsModule,
    NgxDirectivesModule,
    LazyLoadImageModule,
    NgxNestedComponentsModule,
    // NgxSliderModule, not IVY
    NgbDropdownModule,
    StoreModule.forFeature('shared', sharedReducers),
    EffectsModule.forFeature([SharedEffects])
  ],
  exports: [
    CoreModule,
    ThemeSharedModule,
    NgbDropdownModule,
    NgxValidateCoreModule,
    ...sharedComponents
  ],
  providers: []
})
export class SharedModule {}
