import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { getPageName } from '../../../utils/route.util';
import { sendAlertAction } from '../../alert';
import { IFilesState } from '../interfaces';
import { NgxFileUploaderModule } from '../uploader.module';

const MAX_FILE_SIZE = 50000; // in KB 

@Injectable({
    providedIn: NgxFileUploaderModule
})
export class ClientToolsUploaderService {
    private readonly fileReader: FileReader = new FileReader();

    constructor(
        public readonly store: Store<IFilesState>,
        public readonly router: Router
    ) { }

    public setSource(event: any, callBack: CallableFunction) {
        const file = event.target.files[0];
        const name = this.getFileName(event);
        const folderName = this.getFolderName();
        const fileSize = file.size / 1024;

        if (fileSize > MAX_FILE_SIZE) {
            event.target.value = null; // Reset file value
            this.store.dispatch(sendAlertAction({
                message: {
                    status: 'warning',
                    subtitle: 'You have exceeded the file size limit (50MB)',
                    title: 'Out of memory'
                }
            }))
            return;
        }

        this.fileReader.readAsDataURL(file);
        this.fileReader.onload = () => {
            const src = this.fileReader.result;        
            callBack({ name, src, file, folderName })
        }
    }

    private getFolderName(): string {
        return getPageName(this.router.url)
    }

    private getFileName(event: any): string {
        const params = event.target.value.split("\\");
        if(!this.isExist(params)) return 'file';
        return params[params.length - 1];
    }

    private isExist(params: string[]): boolean {
        return !!params[params.length - 1]
    }
}