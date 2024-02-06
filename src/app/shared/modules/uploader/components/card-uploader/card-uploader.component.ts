import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { IAppState } from '../../../../../store/reducers';

import { ClientUploaderService } from '../../services';
import { UploaderComponent } from '../uploader.component';

@Component({
    selector: 'ngx-card-uploader',
    styleUrls: ['./card-uploader.component.scss'],
    template: `
        <div class="upload-card__file">
            <label [for]="'card_uploader_'+key" class="cursor-pointer">
                {{(fileStore | async).name | textOverFlow}}
                <nb-icon icon="file-add-outline" pack="eva"></nb-icon>
                <input 
                    style="display: none;" 
                    type="file" 
                    [name]="'card_uploader_'+key" 
                    [id]="'card_uploader_'+key"
                    [accept]="accept"
                    (change)="onChangeImage($event, key)">
            </label>
        </div>
    `
})
export class CardUploaderComponent extends UploaderComponent implements OnInit, OnDestroy {
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