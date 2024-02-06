import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Store } from "@ngrx/store";

import { IFilesState, ImageResponse } from "../interfaces";
import { saveFileAction } from "../store";
import { NgxFileUploaderModule } from "../uploader.module";
import { ClientToolsUploaderService } from "./client-tools-uploader.service";

@Injectable({
    providedIn: NgxFileUploaderModule
})
export class ClientUploaderService extends ClientToolsUploaderService {
    constructor(
        public readonly store: Store<IFilesState>,
        public readonly router: Router
    ) {
        super(store, router);
    }

    public upload(event: any, key: string): void {
        console.log(key);
        this.setSource(event, (response: ImageResponse) => {
            console.log('response', response);
            this.store.dispatch(saveFileAction({
                file: {
                    folderName: response.folderName,
                    data: response.file,
                    name: response.name,
                    src: response.src,
                    status: 'SELECTED',
                    url: '',
                    form: null,
                    key
                }
            }))
        });
    }
}