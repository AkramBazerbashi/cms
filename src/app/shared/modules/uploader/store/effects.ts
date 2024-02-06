import { Actions, createEffect, ofType } from "@ngrx/effects";
import { concatMap, map, catchError } from 'rxjs/operators';
import { of} from 'rxjs';

import { ServerUploaderService } from "../services";
import * as FilesActions from './actions';

export class FilesEffects {
    constructor(
        private readonly actions$: Actions,
        private readonly serverUploaderService: ServerUploaderService
    ) {}
}