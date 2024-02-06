import { Injectable } from '@angular/core';
import { Action, Store } from '@ngrx/store';
import { IAppState } from '../../../../store/reducers';
import { ISuccessResponse } from '../../../interfaces/response.interface';
import { sendAlertAction } from '../../alert';

@Injectable()
export class HandleResponseService {
    constructor(
        private readonly store: Store<IAppState>
    ) { }
    
    public success(successResponse: ISuccessResponse<any>, action: Action): Action {
        this.store.dispatch(sendAlertAction({
            message: {
                status: 'success',
                subtitle: successResponse.message,
                title: successResponse.main_message
            }
        }))
        return action;
    }
}