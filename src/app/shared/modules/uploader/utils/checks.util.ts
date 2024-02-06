import { IsImageNotUploadedOnServer } from "../interfaces/utils.interface";

export const isImageNotUploadedOnServer: IsImageNotUploadedOnServer = (file) => {
    return file.form && file.form.has('file') && !file.url
}