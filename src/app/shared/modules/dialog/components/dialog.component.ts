import { 
    Component, 
    OnDestroy,
    AfterViewInit,
    Type,
    ViewChild,
    ChangeDetectorRef,
    ComponentFactoryResolver,
    ComponentRef
} from '@angular/core';
import { Subject } from 'rxjs';

import { InsertionDirective } from '../directives/insertion.directive';
import { DialogService } from '../services';
    
@Component({
    selector: 'ngx-dialog',
    styleUrls: ['./dialog.component.scss'],
    template: `
        <div class="confirm-add__wraper" (click)="onOverlayClicked($event)">
            <div (click)="onDialogClicked($event)" class="confirm-add__card">
                <div (click)="onOverlayClicked($event)" class="confirm-add__card-close">
                    <nb-icon icon="close-outline" pack="eva"></nb-icon>
                </div>
                <ng-template ngxAppInsertion></ng-template>
            </div>
        </div>
    `
})
export class DialogComponent implements AfterViewInit, OnDestroy {
    private readonly _onClose = new Subject<any>()
    public onClose = this._onClose.asObservable();

    public componentRef: ComponentRef<any>
    public childComponentType: Type<any>

    @ViewChild(InsertionDirective) insertionPoint: InsertionDirective;

    constructor(
        private readonly componentFactoryResolver: ComponentFactoryResolver,
        private readonly changeDetectorRef: ChangeDetectorRef,
        private readonly dialogService: DialogService
    ) {}

    ngAfterViewInit() {
        this.loadChildComponent(this.childComponentType);
        this.changeDetectorRef.detectChanges();
    }

    ngOnDestroy() {
        this.closeDialog();
    }

    public onOverlayClicked(event: MouseEvent) {
        this.closeDialog();
    }

    public onDialogClicked(event: MouseEvent) {
        event.stopPropagation()
    }

    private closeDialog() {
        if(this.componentRef) {
            this.dialogService.close();
            this.componentRef.destroy();
        }
    }

    private loadChildComponent(componentType: Type<any>) {
        const componentFactory = this.componentFactoryResolver.resolveComponentFactory(componentType);
    
        const viewContainerRef = this.insertionPoint.viewContainerRef;
        viewContainerRef.clear();
    
        this.componentRef = viewContainerRef.createComponent(componentFactory);
    }   
}
  