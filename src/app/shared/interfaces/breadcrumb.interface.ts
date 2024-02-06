import { ActivatedRoute } from "@angular/router";

export interface IBreadcrumb {
    label: string;
    url: string;
    class?: string;
}
export interface CreateBreadcrumb {
    createBreadcrumb(route: ActivatedRoute, url: string, breadcrumbs: IBreadcrumb[]): IBreadcrumb[];
}