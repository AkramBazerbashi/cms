import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'ngx-add-item-card',
    styleUrls: ['./add-item-card.component.scss'],
    template: `
        <div *ngIf="show" (click)="onClick.emit()" class="add-item-card">
            <p class="py-0 my-0 mx-3">{{title}}</p>
            <nb-icon icon="plus-outline" pack="eva"></nb-icon>
        </div>
    `
})
export class AddItemCardComponent implements OnInit {
    @Input() show: boolean = false;
    @Input() title: string = '';
    @Output() onClick: EventEmitter<void> = new EventEmitter<void>();

    constructor() { }

    ngOnInit() { }
}