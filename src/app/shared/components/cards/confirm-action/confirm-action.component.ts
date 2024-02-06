import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DialogConfig, DialogRef } from '../../../modules/dialog';

@Component({
    selector: 'ngx-confirm-action',
    styleUrls: ['./confirm-action.component.scss'],
    template: `
        <div class="w-100 confirm-card">
            <h3 class="py-0 my-0 mb-1 text text-green">{{ dialogConfig.data.title ?? 'Redirect to home ?' }}</h3>
            <p class="py-0 my-0 text text-muted text-bold text-normal">{{ dialogConfig?.data?.subtitle }}</p>
            <div class="w-100 mt-2 d-flex justify-content-end align-items-center">
                <button type="button" (click)="dialogRef.close()" class="btn btn-outline-danger mx-2">Cancel</button>
                <button type="button" (click)="onConfirm()" class="btn btn-success">Confirm</button>
            </div>
        </div>
    `
})

export class ConfirmActionComponent implements OnInit {
    constructor(
        public dialogConfig: DialogConfig,
        public dialogRef: DialogRef,
        private readonly router: Router
    ) { }

    ngOnInit() { }

    public onConfirm(): void {
        this.router.navigate([`/pages${this.dialogConfig.data.path}`])
        this.dialogRef.close()
    }
}