import { ElementRef, Injectable, Renderer2 } from '@angular/core';

@Injectable()
export class PDFDonloaderService {
    private base64Response: any;

    constructor(
        private readonly renderer: Renderer2,
        private readonly elementRef: ElementRef
    ) { }

    private processFileResponse(fileResponseData: any, fileName: string, render: string): void {
        if (render === 'base64') {
            this.base64Response = fileResponseData;
            const binaryString = window.atob(fileResponseData);
            const bytes = new Uint8Array(binaryString.length);
            const binaryToBlob = bytes.map((byte, i) => binaryString.charCodeAt(i));
            const blob = new Blob([binaryToBlob], { type: 'application/pdf' });
            this.downloadFile(blob, fileName, render);
        } else {
            const blob = new Blob([fileResponseData], { type: 'application/pdf' });
            this.downloadFile(blob, fileName, render);
        }
    }

    private downloadFile(blob: any, fileName: string, render: string): void {
        // IE Browser
        if (window.navigator && (window.navigator as any).msSaveOrOpenBlob) {
            (window.navigator as any).msSaveOrOpenBlob(blob, fileName);
            return;
        }

        // Other Browsers
        const url = (window.URL || window.webkitURL).createObjectURL(blob);
        const link = this.renderer.createElement('a');
        this.renderer.setAttribute(link, 'download', fileName);
        this.renderer.setAttribute(link, 'href', url);
        this.renderer.setAttribute(link, 'target', '_blank');
        this.renderer.appendChild(this.elementRef.nativeElement, link);
        link.click();
        this.renderer.removeChild(this.elementRef.nativeElement, link);

        setTimeout(() => {
            window.URL.revokeObjectURL(url);
        }, 1000);
    }

    public openInNewTab(blob: any, fileName: string): void {
        // IE Browser
        if (window.navigator && (window.navigator as any).msSaveOrOpenBlob) {
            (window.navigator as any).msSaveOrOpenBlob(blob, fileName);
            return;
        }

        // Other Browsers
        const url = (window.URL || window.webkitURL).createObjectURL(blob);
        window.open(url, '_blank');

        // rewoke URL after 15 minutes
        setTimeout(() => {
            window.URL.revokeObjectURL(url);
        }, 15 * 60 * 1000);
    }
}