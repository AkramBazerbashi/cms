import { ChangeDetectionStrategy, Component, Inject, Input, OnChanges, OnInit, SimpleChanges, ViewChild, ViewContainerRef } from '@angular/core';
import { CONTENT_MAPPINGS } from '../constants';
import { Types } from '../interfaces';
import { CreateDynamicComponentsService } from '../services';

@Component({
    selector: 'ngx-nested-components',
    template: `<ng-container #container></ng-container>`,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class BaseComponent implements OnInit, OnChanges {
    @ViewChild('container', { read: ViewContainerRef, static: true }) target: ViewContainerRef;
    @Input() data: any;
    @Input() templateType: Types;

    constructor(
        private createDynamicComponentsService: CreateDynamicComponentsService,
        @Inject(CONTENT_MAPPINGS) private contentMappings: any
    ) { }

    ngOnInit() { }

    ngOnChanges(changes: SimpleChanges): void {
        // Remove old child components...
        this.target.clear();

        // Load new components...
        this.data.forEach((item: any) => {
            const template = this.contentMappings[this.templateType];
            this.createDynamicComponentsService.createComponent(item, template, this.target, this.templateType);
        });
    }
}