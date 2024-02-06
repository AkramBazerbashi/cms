import { createReducer, on } from "@ngrx/store";

import { alertState } from "./state";
import * as AlertActions from './actions';

export const alertReducers = createReducer(
    alertState,
    
    on(AlertActions.sendAlertAction, (state, { message }) => ({
        ...state,
        message: {
            ...message,
            options: {},
            show: true
        }
    })),
)