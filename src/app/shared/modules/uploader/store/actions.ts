import { createAction, props } from "@ngrx/store";
import { IFile } from "../interfaces";

const module = '[Files Module]';

export const getFileByKey = createAction(
    `${module} Get File By Key`,
    props<{ key: string }>()
)
export const saveFileAction = createAction(
    `${module} Save File`,
    props<{ file: IFile }>()
);
export const updateSrcFileAction = createAction(
    `${module} Update Src File`,
    props<{ src: string, name?: string, key: string }>()
)
export const removeFileAction = createAction(
    `${module} Remove File`,
    props<{ key: string }>()
);
export const uploadFileAction = createAction(
    `${module} Upload File`,
    props<{ fileData: FormData }>()
);
export const uploadFileSuccessAction = createAction(
    `${module} Upload File Success`,
    props<{ url: string }>()
);
export const uploadFileFailedAction = createAction(
    `${module} Upload File Failed`
)