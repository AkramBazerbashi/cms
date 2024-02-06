import { createAction, props } from "@ngrx/store";
import { IAlertMessage } from "../interfaces";

const module = '[Alert Module]';

export const sendAlertAction = createAction(
    `${module} Send alert message`,
    props<{ message: IAlertMessage }>()
);
export const loadAlertAction = createAction(
    `${module} Load alert message`,
    props<{ message: IAlertMessage }>()
)