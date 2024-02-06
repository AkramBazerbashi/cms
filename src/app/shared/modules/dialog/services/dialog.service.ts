import {
    Injectable,
    ComponentFactoryResolver,
    ApplicationRef,
    Injector,
    EmbeddedViewRef,
    ComponentRef,
    Type
} from '@angular/core';
import { DialogComponent } from '../components';

import { NgxDialogModule } from '../dialog.module';
import { DialogConfig, DialogRef } from '../models';
import { DialogInjectorService } from './dialog-injector.service';
  
@Injectable({
    providedIn: NgxDialogModule,
})
export class DialogService {
    private dialogComponentRef: ComponentRef<DialogComponent>
  
    constructor(
        private componentFactoryResolver: ComponentFactoryResolver,
        private appRef: ApplicationRef,
        private injector: Injector
    ) {}
  
    public open(componentType: Type<any>, config: DialogConfig): DialogRef {
        const ref: DialogRef = this.appendDialogComponentToBody(config);
        this.dialogComponentRef.instance.childComponentType = componentType;
        return ref;
    }

    public close(): void {
        this.removeDialogComponentFromBody();
    }

    private appendDialogComponentToBody(config: DialogConfig): DialogRef {
        // create a map with the config
        const map = new WeakMap();
        map.set(DialogConfig, config);

        // add the DialogRef to dependency injection
        const dialogRef = new DialogRef();
        map.set(DialogRef, dialogRef);

        // we want to know when somebody called the close mehtod
        const sub = dialogRef.afterClosed.subscribe(() => {    
            // close the dialog
            this.removeDialogComponentFromBody();
            sub.unsubscribe();
        });

        const componentFactory = this.componentFactoryResolver.resolveComponentFactory(DialogComponent);
        const componentRef = componentFactory.create(
            new DialogInjectorService(this.injector, map)
        );

        this.appRef.attachView(componentRef.hostView);

        // Set dialog on root html dom
        const domElem = (componentRef.hostView as EmbeddedViewRef<any>).rootNodes[0] as HTMLElement;
        document.body.appendChild(domElem);
      
        this.dialogComponentRef = componentRef;

        // Listen when dialog closed from child of dialog
        this.dialogComponentRef.instance.onClose.subscribe(() => {
            this.removeDialogComponentFromBody();
        });
      
        return dialogRef;
    }

    private removeDialogComponentFromBody() {
        this.appRef.detachView(this.dialogComponentRef.hostView);
        this.dialogComponentRef.destroy();
    }
}