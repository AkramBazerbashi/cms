import { Router } from "@angular/router";
import { Store } from "@ngrx/store";
import { Observable } from 'rxjs';
import { filter } from 'rxjs/operators';

import { IAppState } from "../../../../store/reducers";
import { IFile } from "../interfaces";
import { ClientUploaderService } from "../services";
import { removeFileAction, selectCurrentFileStoreWithKey } from "../store";

export class UploaderComponent {
    public fileStore: Observable<IFile>

    constructor(
        public readonly clientUploaderService: ClientUploaderService,
        public readonly store: Store<IAppState>,
        public readonly router: Router
    ) { }

    public setFile(key: string): void {
        this.fileStore = this.store.select(selectCurrentFileStoreWithKey({ key }))
        .pipe(filter(file => file.key == key))
    }

    public removeFile(key: string): void {
        this.store.dispatch(removeFileAction({ key }))
    }

    public onChangeImage(event: any, key: string): void {
        this.clientUploaderService.upload(event, key);
    }
}