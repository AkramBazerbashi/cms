import { InjectFlags, Injector, Type, InjectionToken } from '@angular/core';

export class DialogInjectorService implements Injector {
    constructor(
        private _parentInjector: Injector,
        private _additionalTokens: WeakMap<any, any>
    ) {}

    get<T>(
        token: Type<T> | InjectionToken<T>,
        notFoundValue?: T,
        flags?: InjectFlags
    ): T;
    get(token: any, notFoundValue?: any);
    get(token: unknown, notFoundValue?: unknown, flags?: unknown): any {
        const value = this._additionalTokens.get(token)
        if (value) return value;
        return this._parentInjector.get<any>(token as any, notFoundValue)
    }
}