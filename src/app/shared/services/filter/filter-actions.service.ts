import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { loadCourses } from "../../../pages/manage-courses/store";
import { IAppState } from "../../../store/reducers";

@Injectable()
export class FilterActionService {
    private actionType: any;
    constructor(
        private readonly store: Store<IAppState>
    ) {}

    public dispatch(method: string) {
        switch(method) {
            case 'home': 
                this.actionType = loadCourses;
        }

        this.store.dispatch(this.actionType());
    }
}