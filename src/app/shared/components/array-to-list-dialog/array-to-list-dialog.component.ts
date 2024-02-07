import { Component, OnInit } from '@angular/core';
// import { DialogConfig, DialogRef } from '../../modules/dialog';
import { DialogConfig } from '../../modules/dialog/models/dialog-config';
import { DialogRef } from '../../modules/dialog/models/dialog-ref';
@Component({
  selector: 'ngx-array-to-list-dialog',
  templateUrl: './array-to-list-dialog.component.html',
  styleUrls: ['./array-to-list-dialog.component.scss']
})
export class ArrayToListDialogComponent implements OnInit {

  constructor(
    public readonly dialogRef: DialogRef,
    public readonly dialogConfig: DialogConfig
  ) { }

  ngOnInit(): void {
  }

}
