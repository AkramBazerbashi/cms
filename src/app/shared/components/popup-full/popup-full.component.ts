import { 
  Component, 
  EventEmitter, 
  Input, 
  OnInit, 
  OnDestroy,
  AfterViewInit,
  Output,
  Type,
  ViewChild,
  ViewContainerRef,
  ComponentFactoryResolver,
  ComponentRef
} from '@angular/core';
import { Subscription } from 'rxjs';

import { IDialog } from '../../interfaces/dialog.interface';
import { NgxDialogService } from '../../services/dialog/dialog.service';

@Component({
  selector: 'ngx-popup-full',
  styleUrls: ['./popup-full.component.scss'],
  template: `
    <div class="confirm-add__wraper" (click)="onOverlayClicked($event)" *ngIf="status">
      <div (click)="onDialogClicked($event)" class="confirm-add__card">
        <div (click)="close()" class="confirm-add__card-close">
          <nb-icon icon="close-outline" pack="eva"></nb-icon>
        </div>
        <ng-template #view></ng-template>
      </div>
    </div>
  `
})
export class PopupFullComponent implements OnInit, OnDestroy, AfterViewInit {
  @ViewChild('view', { read: ViewContainerRef }) view: ViewContainerRef;
  
  @Input() showPopup: boolean = false;
  @Output() onClose: EventEmitter<boolean> = new EventEmitter();

  private subscription$: Subscription = new Subscription();
  private childComponentType: Type<any>
  public status: boolean = false;

  constructor(
    private readonly ngxDialogService: NgxDialogService,
    private readonly componentFactoryResolver: ComponentFactoryResolver,
  ) {}

  ngOnInit(): void {
    this.subscription$ = this.ngxDialogService.onOpen()
      .subscribe(component => {
        if(component == null) return;

        this.loadComponent(component);
      })
  }

  ngAfterViewInit(): void {
    
  }

  ngOnDestroy(): void {
    this.close();
  }

  public onOverlayClicked(event: MouseEvent) {

  }

  public onDialogClicked(event: MouseEvent) {
    event.stopPropagation();
  }

  public close() {
    // Close popup...
    this.status = false;

    // Clear old component...
    this.view?.clear();

    // Clear subscription...
    this.subscription$.unsubscribe()
  }

  private loadComponent(ref: IDialog) {
    // Open popup...
    this.status = true;

    // Remove all old component...
    this.view?.clear();
    
    // Resolve Component...
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(ref.component);
    
    // Set component in template view...
    const componentRef: ComponentRef<any> = this.view?.createComponent(componentFactory);
    
    // Pass data to component..
    if(componentRef?.instance.data != null) {
      componentRef.instance.data = ref.context;
    }
    
    // On close component..
    if(componentRef?.instance.onClose != null) {}
  }
}
