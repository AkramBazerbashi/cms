import { createAction, props } from "@ngrx/store";

const module = '[Sidebars Module]';

export const openSidebarAction = createAction(
    `${module} Open Category Sidebar`,
    props<{ key: string }>()
)
export const closeSidebarAction = createAction(
    `${module} Close Category Sidebar`,
    props<{ key: string }>()
)
export const toggleSidebarAction = createAction(
    `${module} Toggle Category Sidebar`,
    props<{ key: string }>()
)