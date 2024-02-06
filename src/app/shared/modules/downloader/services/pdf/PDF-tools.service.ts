import { Injectable } from '@angular/core';

@Injectable()
export class PDFToolsService {
    constructor() { }

    public useFileSaverAPI(): boolean {
        return (/(iPad|iPhone|iPod)/g.test(navigator.platform || navigator.userAgent) ||
            ((navigator.platform || navigator.userAgent) === 'MacIntel' && navigator.maxTouchPoints > 1)) &&
            !(window as any).MSStream;
    }

    public isAndroid(): boolean {
        return (/(android)/i.test(navigator.platform || navigator.userAgent))
    }
}