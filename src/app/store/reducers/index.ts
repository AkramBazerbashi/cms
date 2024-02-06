import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import * as fromShared from '../../shared/store';
import * as fromAlert from '../../shared/modules/alert';
import * as fromFiles from '../../shared/modules/uploader';
import * as fromSidebars from '../../shared/modules/sidebars';
import { environment } from '../../../environments/environment';

export interface IAppState {
  shared: fromShared.ISharedState;
  // questions: fromTests.ITestsState;
  alert: fromAlert.IAlertState;
  files: fromFiles.IFilesState;
  sidebars: fromSidebars.ISidebarsState;
  
}

export const AppReducers: ActionReducerMap<IAppState> = {
  shared: fromShared.sharedReducers,
  // questions: fromTests.questionsReducers,
  alert: fromAlert.alertReducers,
  files: fromFiles.filesReducers,
  sidebars: fromSidebars.sidebarsReducers,
  
};

export const metaReducers: MetaReducer<IAppState>[] = !environment.production ? [] : [];
