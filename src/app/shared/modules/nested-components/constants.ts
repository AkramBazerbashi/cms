import { InjectionToken } from '@angular/core';
import { Types } from './interfaces';

export const CONTENT_MAPPINGS = new InjectionToken<any>(`CONTENT_MAPPINGS`);

export const CONTENT_COMPONENTS = [
]

export const CONTENT_MAPPINGS_PROVIDER = [{
    provide: CONTENT_MAPPINGS,
    useValue: { 
    },
}]