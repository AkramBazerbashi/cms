import {
    ComponentFactoryResolver,
    ViewContainerRef,
    Injectable,
    Inject,
} from '@angular/core';

import { CONTENT_MAPPINGS } from '../constants';
import { Types } from '../interfaces';

@Injectable()
export class CreateDynamicComponentsService {
    constructor(
        private componentFactoryResolver: ComponentFactoryResolver,
        @Inject(CONTENT_MAPPINGS) private contentMappings: any,
    ) { }

    public createComponent(content: any, type: any, vcRef: ViewContainerRef, templateType: Types) {
        const componentRef = this.renderComponent(content, type, vcRef);

        if(content.child?.length == 0) return;

        if (!componentRef.instance.embeddedContainer) {
            const _component_name = componentRef.instance.constructor.name;
            throw new TypeError(
                `Trying to render embedded content. ${_component_name} must have @ViewChild() embeddedContainer defined`
            );
        }

        content.child.forEach((type: any) => {
            const typeP = this.contentMappings[templateType];
            this.createComponent(
                type,
                typeP,
                componentRef.instance.embeddedContainer,
                templateType
            );
        });
    }

    public renderComponent(content: any, type: any, vcRef: ViewContainerRef) {
        // Create component and resolve it...
        const componentFactory = this.componentFactoryResolver.resolveComponentFactory(type);
        const componentRef = vcRef.createComponent<any>(componentFactory);
        
        // Pass data to child component...
        componentRef.instance.data = content;
        
        if (componentRef.instance.contentOnCreate) {
            componentRef.instance.contentOnCreate(content);
        }

        return componentRef;
    }
}