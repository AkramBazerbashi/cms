import { IBreadcrumb } from "../interfaces/breadcrumb.interface";

export interface ISharedState {
    routes: IBreadcrumb[];
    loaderStatus: boolean;
}

export const sharedState: ISharedState = {
    routes: [],
    loaderStatus: false,
}