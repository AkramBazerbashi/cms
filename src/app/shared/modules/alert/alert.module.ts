import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NbIconModule } from '@nebular/theme';
import { StoreModule } from '@ngrx/store';
import { NgxPipesModule } from '../pipes';
import { AlertMessageComponent } from './components/alert-message.component';
import { LogoSvgComponent } from './components/logo-svg/logo-svg.component';
import { alertReducers } from './store';

@NgModule({
    declarations: [
        AlertMessageComponent,
        LogoSvgComponent
    ],
    imports: [
        CommonModule,
        NbIconModule,
        NgxPipesModule,
        StoreModule.forFeature('alert', alertReducers)
    ],
    exports: [
        AlertMessageComponent
    ],
    providers: [],
})
export class NgxAlertModule { }
