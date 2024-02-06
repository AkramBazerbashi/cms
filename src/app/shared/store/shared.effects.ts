import { Injectable } from "@angular/core";
import { Actions } from "@ngrx/effects";

import * as SharedActionsTypes from './shared.actions';

@Injectable()
export class SharedEffects {
    constructor(
        private readonly actions$: Actions,
    ) {}
}