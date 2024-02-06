import { IFile } from "./uploader.interface";

export interface IFileStore {
    [key: string]: IFile;
}

export interface IFilesState {
    fileStore: IFileStore;
    selectedKey: string;
}