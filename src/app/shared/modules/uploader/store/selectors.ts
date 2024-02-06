import { createSelector } from "@ngrx/store";
import { IAppState } from "../../../../store/reducers";
import { IFile } from "../interfaces";
import { defaultFile } from "../models";

const selectFilesState = (state: IAppState) => state.files;

export const selectCurrentFileStoreWithKey = (props: { key: string }) =>
    createSelector(selectFilesState, (state) => {
        const currentFile = state.fileStore[props.key];
        return currentFile ?? {
            ...defaultFile,
            key: props.key
        } as IFile
    });

export const selectFilesStore = createSelector(
    selectFilesState,
    (state) => state.fileStore
)
export const selectCurrentFileStore = createSelector(
    selectFilesState,
    (state) => state.fileStore[state.selectedKey]
)
export const selectFileForm = createSelector(
    selectFilesState,
    (state) => ({
        url: state.fileStore[state.selectedKey].url,
        status: state.fileStore[state.selectedKey].status,
        form: state.fileStore[state.selectedKey].form,
        key: state.fileStore[state.selectedKey].key
    })
)
export const selectFileData = createSelector(
    selectFilesState,
    (state) => ({
        name: state.fileStore[state.selectedKey].name,
        folderName: state.fileStore[state.selectedKey].folderName,
        src: state.fileStore[state.selectedKey].src,
        data: state.fileStore[state.selectedKey].data,
        status: state.fileStore[state.selectedKey].status,
        key: state.fileStore[state.selectedKey].key
    })
)
export const selectFile = createSelector(
    selectFilesState,
    (state) => ({
        file: state.fileStore[state.selectedKey],
        status: state.fileStore[state.selectedKey].status,
        key: state.fileStore[state.selectedKey].key
    })
)
export const selectFileStatus = createSelector(
    selectFilesState,
    (state) => state.fileStore[state.selectedKey].status
)