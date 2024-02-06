import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { IAppState } from '../../../../../store/reducers';
import { ClientUploaderService } from '../../services';
import { UploaderComponent } from '../uploader.component';

@Component({
    selector: 'ngx-profile-uploader',
    styleUrls: ['./profile-uploader.component.scss'],
    template: `
        <div class="h-100 px-5 d-flex justify-content-center align-items-center flex-column">
            <div class="image-paner mb-4">
                <img [src]="(fileStore | async).src" [alt]="(fileStore | async).name">
                <div *ngIf="(fileStore | async).status != 'NOT_SELECTED'" (click)="removeFile(key)" class="image-paner__icon cursor-pointer">
                    <nb-icon icon="trash-2-outline" pack="eva"></nb-icon>
                    <p class="mb-0 pb-0">Remove</p>
                </div>
            </div>

            <small class="text-muted pb-2 font-italic">
                Upload or Remove your profile image
            </small>

            <label [for]="'profile_uploader_'+key" class="cursor-pointer">
                <div class="btn btn-success" type="button">
                    <nb-icon style="transform: rotate(180deg);" icon="upload-outline" pack="eva"></nb-icon>
                    Edit | Upload
                </div>    
                <input
                    style="display: none;" 
                    type="file" 
                    [name]="'profile_uploader_'+key" 
                    [id]="'profile_uploader_'+key"
                    [accept]="accept"
                    (change)="onChangeImage($event, key)">
            </label>
        </div>
    `
})

export class ProfileUploaderComponent extends UploaderComponent implements OnInit, OnDestroy {
    @Input() key: string = '';
    @Input() accept: string = '*';

    constructor(
        public readonly clientUploaderService: ClientUploaderService,
        public readonly store: Store<IAppState>,
        public readonly router: Router
    ) {
        super(clientUploaderService, store, router)
    }

    ngOnInit(): void {
        this.setFile(this.key)
    }

    ngOnDestroy(): void { }
}