import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";

@Injectable()
export class CategorySidebarService {
    public categoryState: BehaviorSubject<{status: boolean}> = new BehaviorSubject({ status: false });

    constructor() {}

    public toggle(): void {
        this.categoryState.next({ status: true });
    }
    
    public open(): void {
        this.categoryState.next({ status: true });
    }

    public close(): void {
        this.categoryState.next({ status: false });
    }

    public setCategoryBarStatus(payload: { status: boolean }): void {
        this.categoryState.next(payload);
    }
}