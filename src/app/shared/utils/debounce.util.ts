let timeOut: any;
export const debounceCallback = (callback: Function, delay: number) => {
    clearTimeout(timeOut);
    timeOut = setTimeout(() => callback(), delay);
}