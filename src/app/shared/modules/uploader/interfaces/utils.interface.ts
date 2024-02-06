import { IFile } from "./uploader.interface";

export type IsImageNotUploadedOnServer = (file: IFile) => boolean;
export type GetFileExtension = (file: any) => string;