import { GetFileExtension } from "../interfaces";

export const getFileExtension: GetFileExtension = (file) => {
    const details: string[] = file.name.split('.');
    return details.pop().toLowerCase();
}
export const getUrlExtension = (url: string) => {
    const urlParams: string[] = url.split('.');
    return urlParams.pop().toLowerCase();
}