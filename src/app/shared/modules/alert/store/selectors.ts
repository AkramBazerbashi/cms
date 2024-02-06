import { createSelector } from "@ngrx/store";
import { IAppState } from "../../../../store/reducers";
import { IAlertState } from "../interfaces/state.interface";

const selectAlertState = (state: IAppState) => state.alert

export const selectMessage = createSelector(
    selectAlertState,
    (state: IAlertState) => state.message
)