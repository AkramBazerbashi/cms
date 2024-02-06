import { createSelector } from "@ngrx/store";
import { IAppState } from "../../../../store/reducers";

const selectSidebarsState = (state: IAppState) => state.sidebars;

export const selectCategorySidebar = createSelector(
    selectSidebarsState,
    (state) => state.categorySidebar
)
export const selectCategorySidebarStatus = createSelector(
    selectSidebarsState,
    (state) => state.categorySidebar.status
)