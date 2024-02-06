export function promiseDelay(time: number, v?: any): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, time, v));
}