import { createSelector } from "@ngrx/store";
import { IAppState } from "../../store/reducers";
import { ISharedState } from "./shared.state";

export const selectSharedState = (state: IAppState) => state.shared;

export const selectRoutes = createSelector(
    selectSharedState,
    (state: ISharedState) => state.routes
);
export const selectLoaderStatus = createSelector(
    selectSharedState,
    (state: ISharedState) => state.loaderStatus
);