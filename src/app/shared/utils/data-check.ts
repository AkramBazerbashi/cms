export function isEmpty(value: any): boolean {
    if (isObject(value)) return Object.keys(value).length == 0;
    if (Array.isArray(value)) return value.length == 0;
    return value === null || value === undefined || value == '' || +value == 0;
}

export function isObject(value: any): boolean {
    if (value === null) return false;
    return typeof value === 'function' || typeof value === 'object';
}

export function isExpired(timer: number): boolean {
    return timer < Date.now();
}

export function isClientSide() {
    return typeof window !== 'undefined';
}
