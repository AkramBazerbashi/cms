import { IFilesState, Keys } from "../interfaces";
import { defaultFile } from "../models";

export const filesState: IFilesState = {
    selectedKey: Keys.DEFAULT,
    fileStore: {
        [Keys.DEFAULT]: {
            ...defaultFile
        }
    } 
}