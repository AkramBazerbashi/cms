import { Injectable } from "@angular/core";
import { NbLayoutDirection, NbLayoutDirectionService } from "@nebular/theme";
import { LocalStorageManager } from "../localstorage/localstorage-manage.service";

@Injectable({providedIn: 'root'})
export class LocalDirectionService {
    private localStorageManager: LocalStorageManager;
    
    constructor(
        private readonly nbLayoutDirectionService: NbLayoutDirectionService
    ) {
        this.localStorageManager = new LocalStorageManager('riyadhUDirection');
    }

    public setDirection(direction: NbLayoutDirection) {
        this.localStorageManager.setLocalData({direction});
        this.nbLayoutDirectionService.setDirection(direction);
    }

    public getDirection(): NbLayoutDirection {
        if(!this.localStorageManager.isExist()) return NbLayoutDirection.LTR;
        return this.localStorageManager.getLocalData().direction;
    }

    public isLtr(): boolean {
        const dir = this.getDirection();
        return dir == 'ltr';
    }

    public isRtl(): boolean {
        const dir = this.getDirection();
        return dir == 'rtl';
    }
}