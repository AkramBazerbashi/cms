import { Component, Input, OnChanges, SimpleChanges } from "@angular/core";

@Component({
    selector: 'ngx-logo-svg',
    styleUrls: ['./logo-svg.component.scss'],
    template: `
        <svg class="logo-svg" [style.filter]="status" width="119" height="72" viewBox="0 0 119 72" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
            <path d="M0 0H119V72H32C14.3269 72 0 57.6731 0 40V0Z" fill="url(#pattern0)" fill-opacity="1"/>
            <defs>
                <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
                    <use xlink:href="#image0_1408_12141" transform="translate(-0.366801) scale(0.00035554 0.000587628)"/>
                </pattern>
                <image id="image0_1408_12141" width="4096" height="2529" xlink:href="data:image/png;base64,
                "/>
            </defs>
        </svg>
    `
})
export class LogoSvgComponent {
    _status: string;

    @Input() 
    set status(value: string) {
        this._status = value;
    }

    get status() {
        return this.filterColorOptions.find(color => color.status == this._status)?.filter;
    }

    filterColorOptions = [
        { 
            status: 'success', 
            filter: 'brightness(0) saturate(100%) invert(31%) sepia(40%) saturate(1063%) hue-rotate(67deg) brightness(105%) contrast(81%)'
        },
        { 
            status: 'danger', 
            filter: 'brightness(0) saturate(100%) invert(17%) sepia(98%) saturate(3021%) hue-rotate(354deg) brightness(84%) contrast(96%)'
        },
        { 
            status: 'info', 
            filter: 'brightness(0) saturate(100%) invert(43%) sepia(28%) saturate(2106%) hue-rotate(178deg) brightness(85%) contrast(87%)'
        },
        { 
            status: 'warning', 
            filter: 'invert(1)'
        },

    ]

    constructor() {}
}