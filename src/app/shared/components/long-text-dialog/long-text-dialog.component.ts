import { Component, OnInit } from '@angular/core';
// import { DialogConfig, DialogRef } from '../../modules/dialog';
import { DialogConfig } from '../../modules/dialog/models/dialog-config';
import { DialogRef } from '../../modules/dialog/models/dialog-ref';

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
    public readonly dialogRef: DialogRef,
    public readonly dialogConfig: DialogConfig
) { }

ngOnInit() { }

}
