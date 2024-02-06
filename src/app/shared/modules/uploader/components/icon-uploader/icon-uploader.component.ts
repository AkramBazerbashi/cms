import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { IAppState } from '../../../../../store/reducers';
import { Keys } from '../../interfaces';

import { ClientUploaderService } from '../../services';
import { UploaderComponent } from '../uploader.component';

@Component({
  selector: 'ngx-icon-uploader',
  styleUrls: ['./icon-uploader.component.scss'],
  template: `
    <label [ngClass]="{ 'active': (fileStore | async).status == 'NOT_SELECTED' }"
      class="form__upload" 
      [for]="'icon_uploader_'+key">
      <img *ngIf="(fileStore | async).status != 'NOT_SELECTED'"
        [src]="(fileStore | async).src"
        width="51"
        height="51"
        alt="avatar">
      <nb-icon *ngIf="(fileStore | async).status == 'NOT_SELECTED'" 
        icon="cloud-download-outline" 
        pack="eva">
      </nb-icon>
      <input (change)="onChangeImage($event, key)"
        style="display: none;"
        [id]="'icon_uploader_'+key"
        [name]="'icon_uploader_'+key"
        accept="image/*"
        type="file">
    </label>
  `
})
export class IconUploaderComponent extends UploaderComponent implements OnInit, OnDestroy {
  @Input() key: string = '';

  constructor(
    public readonly clientUploaderService: ClientUploaderService,
    public readonly store: Store<IAppState>,
    public readonly router: Router
  ) { 
    super(clientUploaderService, store, router)
  }

  ngOnInit(): void {
    this.setFile(this.key);
  }

  ngOnDestroy(): void {}
}