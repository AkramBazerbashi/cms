import { createReducer, on } from "@ngrx/store";

import * as SharedActionsTypes from './shared.actions';
import { sharedState } from "./shared.state";

export const sharedReducers = createReducer(
    sharedState,

    /**
     * //////////////////
     * Routes Reducers
     * //////////////////
     */
    on(SharedActionsTypes.setRoutesAction, (state, { routes }) => ({
        ...state,
        routes: [...routes]
    })),

    /**
     * //////////////////
     * Loader Reducers
     * //////////////////
     */
    on(SharedActionsTypes.setLoaderAction, (state, { status }) => ({
        ...state,
        loaderStatus: status
    })),
)