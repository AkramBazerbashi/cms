import { createReducer, on } from "@ngrx/store";

import { filesState } from "./state";
import * as FilesActions from './actions';
import { defaultFile } from "../models";
import { Keys } from "../interfaces";

export const filesReducers = createReducer(
    filesState,

    on(FilesActions.saveFileAction, (state, { file }) => {
        const formData = new FormData()
        console.log('file', file);
        formData.append('folder_name', file.folderName)
        formData.append('file', file.data)
        
        return {
            ...state,
            selectedKey: file.key,
            fileStore: {
                ...state.fileStore,
                [file.key]: {
                    ...file,
                    form: formData
                }
            }
        }
    }),

    // on(FilesActions.updateSrcFileAction, (state, { src, name, key }) => ({
    //     ...state,
    //     fileStore: {
    //         ...state.fileStore,
    //         [key]: {
    //             ...defaultFile,
    //             status: 'UPLOADED',
    //             url: src,
    //             name,
    //             src,
    //             key
    //         }
    //     }
    // })),

    // on(FilesActions.removeFileAction, (state, { key }) => {        
    //     // Empty key will remove selected file..
    //     const keyIsExist = Object.keys(state.fileStore).findIndex(fileKey => fileKey == key) != -1;        
    //     const currentKey = keyIsExist ? key : Keys.DEFAULT

    //     return {
    //         ...state,
    //         selectedKey: currentKey,
    //         fileStore: {
    //             ...state.fileStore,
    //             [currentKey]: {
    //                 ...defaultFile,
    //                 key: currentKey,
    //                 status: 'NOT_SELECTED'
    //             }
    //         }
    //     }
    // }),
)