import { 
    Component, 
    EventEmitter, 
    OnInit, 
    Output, 
    Input 
} from '@angular/core';

@Component({
    selector: 'ngx-list-actions',
    styleUrls: ['./list-actions.component.scss'],
    template: `
        <div class="actions">
            <nb-icon (click)="status = !status" class="cursor-pointer" icon="more-vertical-outline" pack="eva"></nb-icon>
            <div *ngIf="status && methods.length > 0" class="actions__list">
                <ul (ngxClickOutside)="status = $event" class="actions__list-items">
                    <p *ngIf="methods.includes('edit')" (click)="onEditClick.emit()" 
                        class="text text-bold text-warning mb-0 cursor-pointer text-nowrap">
                        <nb-icon icon="edit-2-outline" pack="eva"></nb-icon>
                        Edit
                    </p>
                    <p *ngIf="methods.includes('remove')" (click)="onRemoveClick.emit()" 
                        class="text text-bold text-danger mt-2 mb-0 cursor-pointer text-nowrap">
                        <nb-icon icon="trash-2-outline" pack="eva"></nb-icon>
                        Remove
                    </p>
                    <p *ngIf="methods.includes('publish')" (click)="onPublishClick.emit()" 
                        class="text text-bold text-green mt-2 mb-0 cursor-pointer text-nowrap">
                        <nb-icon icon="external-link-outline" pack="eva"></nb-icon>
                        Publish
                    </p>
                </ul>
            </div>
        </div>
    `
})
export class ListActionsComponent implements OnInit {
    public status: boolean = false;

    @Input() methods: string[] = [];

    @Output() onRemoveClick: EventEmitter<void> = new EventEmitter<void>();
    @Output() onEditClick: EventEmitter<void> = new EventEmitter<void>();
    @Output() onPublishClick: EventEmitter<void> = new EventEmitter<void>();

    constructor() { }
    
    ngOnInit() { }
}