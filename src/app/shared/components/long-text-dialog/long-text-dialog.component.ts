import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { IAppState } from '../../../store/reducers';
import { DialogConfig, DialogRef } from '../../modules/dialog';

@Component({
  selector: 'ngx-long-text-dialog',
  template: `
        <div class="w-100 confirm-card">
            <p class="py-0 my-0 text text-muted text-bold text-normal mb-3" [innerHTML]="dialogConfig?.data"></p>
        </div>
    `,
  styleUrls: ['./long-text-dialog.component.scss']
})
export class LongTextDialogComponent implements OnInit {

  constructor(
    private readonly store: Store<IAppState>,
    public readonly dialogRef: DialogRef,
    public readonly dialogConfig: DialogConfig
) { }

ngOnInit() { }

}
