import { toObjectConverter, toStringConverter } from "../../utils/objects.util";

export class LocalStorageManager {
    private localName: string = '';

    constructor(localName: string) {
        this.localName = localName;
    }

    public setLocalData(data: object): void {
        localStorage.setItem(this.localName, toStringConverter(data));
    }

    public getLocalData(): any {
        return toObjectConverter(
            localStorage.getItem(this.localName)
        );
    }

    public removeLocalData(): void {
        if(this.isExist()) {
            localStorage.removeItem(this.localName);
        }
    }

    public isExist(): boolean {
        console.log('this.getLocalData()', this.getLocalData());
        return !!this.getLocalData();   
    }
}