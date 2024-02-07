import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
// import { DialogConfig, DialogRef } from '../../../shared/modules/dialog';
import { DialogConfig } from '../../../shared/modules/dialog/models/dialog-config';
import { DialogRef } from '../../../shared/modules/dialog/models/dialog-ref';
import { IAppState } from '../../../store/reducers';

@Component({
    template: `
        <div class="w-100 confirm-card">
            <h3 class="text text-green text-lg mb-2">هل أنت متأكد؟</h3>
            <p class="py-0 my-0 text text-muted text-bold text-normal mb-3">{{ dialogConfig?.data?.subtitle }}</p>
            <div class="w-100 mt-2 d-flex justify-content-center align-items-center">
                <button (click)="dialogRef.close()" class="btn btn-outline-success mx-2">الغاء الأمر</button>
                <button (click)="onConfirm()" class="btn btn-danger">حذف</button>
            </div>
        </div>
    `
})

export class ConfirmDeleteComponent implements OnInit {
    
    constructor(
        private readonly store: Store<IAppState>,
        public readonly dialogRef: DialogRef,
        public readonly dialogConfig: DialogConfig
    ) { }

    ngOnInit() { }

    public onConfirm() {
        this.store.dispatch(this.dialogConfig.data.method)
        this.dialogRef.close();
    }
}