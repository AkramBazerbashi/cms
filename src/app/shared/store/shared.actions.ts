import { createAction, props } from "@ngrx/store";
import { IBreadcrumb } from "../interfaces/breadcrumb.interface";

/**
 * /////////////////
 * Routes Actions
 * /////////////////
 */
export const setRoutesAction = createAction(
    '[Shared Module] Set module routes',
    props<{ routes: IBreadcrumb[] }>()
);

/**
 * ////////////////
 * Request Loader
 * ////////////////
 */
export const setLoaderAction = createAction(
    '[Shared Module] Set Loader',
    props<{ status: boolean }>()
);