import { createReducer, on } from "@ngrx/store";

import { sidebarsState } from "./state";
import * as SidebarsActions from './actions';

export const sidebarsReducers = createReducer(
    sidebarsState,

    on(SidebarsActions.openSidebarAction, (state, { key }) => ({
        ...state,
        categorySidebar: {
            ...state.categorySidebar,
            status: true
        }
    })),
    
    on(SidebarsActions.closeSidebarAction, (state, { key }) => ({
        ...state,
        categorySidebar: {
            ...state.categorySidebar,
            status: false
        }
    })),
    
    on(SidebarsActions.toggleSidebarAction, (state, { key }) => ({
        ...state,
        categorySidebar: {
            ...state.categorySidebar,
            status: !state.categorySidebar.status
        }
    })),
)