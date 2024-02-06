import { Injectable } from '@angular/core';
import { Actions } from '@ngrx/effects';
// import { SideBarService } from '../../../../core/utils/sidebar.service';

@Injectable()
export class SidebarEffects {
    constructor(
        private readonly actions$: Actions,
        // private readonly sidebarService: SideBarService
    ) { }

}