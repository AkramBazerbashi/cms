export type IFileStatus = 'NOT_SELECTED' | 'SELECTED' | 'PENDING' | 'UPLOADED' | 'ERROR';

export interface ImageResponse {
    src: string | ArrayBuffer;
    name: string;
    folderName: string;
    file: any;
}

export interface IFileData {
    name: string;
    folderName: string;
    src: string|ArrayBuffer;
    data: any,
    status: IFileStatus
}

export interface IFile {
    name: string;
    folderName: string;
    url: string;
    data: any;
    form: FormData;
    src: string|ArrayBuffer;
    key: string;
    status: IFileStatus;
}