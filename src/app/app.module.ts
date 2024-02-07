import { AccountConfigModule } from '@abp/ng.account/config';
import { CoreModule } from '@abp/ng.core';
import { registerLocale } from '@abp/ng.core/locale';
import { IdentityConfigModule } from '@abp/ng.identity/config';
import { SettingManagementConfigModule } from '@abp/ng.setting-management/config';
import { TenantManagementConfigModule } from '@abp/ng.tenant-management/config';
import { ThemeLeptonXModule } from '@abp/ng.theme.lepton-x';
import { SideMenuLayoutModule } from '@abp/ng.theme.lepton-x/layouts';
import { ThemeSharedModule } from '@abp/ng.theme.shared';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { APP_ROUTE_PROVIDER } from './route.provider';
import { FeatureManagementModule } from '@abp/ng.feature-management';
import { AbpOAuthModule } from '@abp/ng.oauth';
import { AccountLayoutModule } from '@abp/ng.theme.lepton-x/account';
import { CmsModule } from './cms/cms.module';
import { NbDatepickerModule, NbDialogModule, NbMenuModule, NbSidebarModule, NbTimepickerModule, NbToastrModule, NbWindowModule } from '@nebular/theme';
import { ThemeModule } from './theme/theme.module';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { SharedModule } from './shared/shared.module';
import { NgxPipesModule } from './shared/modules/pipes';
import { NgxAlertModule } from './shared/modules/alert';
import { NgxSidebarsModule } from './shared/modules/sidebars/sidebars.module';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { NgbModalModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppReducers, IAppState, metaReducers } from './store/reducers';
// import { SortablejsModule } from 'ngx-sortablejs';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    CoreModule.forRoot({
      environment,
      registerLocaleFn: registerLocale(),
    }),
    AbpOAuthModule.forRoot(),
    ThemeSharedModule.forRoot(),
    AccountLayoutModule.forRoot(),
    AccountConfigModule.forRoot(),
    IdentityConfigModule.forRoot(),
    TenantManagementConfigModule.forRoot(),
    SettingManagementConfigModule.forRoot(),
    ThemeLeptonXModule.forRoot(),
    SideMenuLayoutModule.forRoot(),
    FeatureManagementModule.forRoot(),
    CmsModule,
    // SortablejsModule.forRoot({}), not IVY
    NbSidebarModule.forRoot(),
    NbMenuModule.forRoot(),
    NbDatepickerModule.forRoot(),
    NbTimepickerModule.forRoot(),
    NbDialogModule.forRoot(),
    NbWindowModule.forRoot(),
    NbToastrModule.forRoot(),
    ThemeModule.forRoot(),
    EffectsModule.forRoot([]),
    StoreModule.forRoot(AppReducers, {
      metaReducers,
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true
      }
    }),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    SharedModule,
    NgxPipesModule,
    NgxAlertModule,
    NgxSidebarsModule,
    NbEvaIconsModule,
    NbMenuModule.forRoot(),
    NgbModule,
    NgbModalModule
  ],
  declarations: [AppComponent],
  providers: [APP_ROUTE_PROVIDER],
  bootstrap: [AppComponent],
})
export class AppModule {}
