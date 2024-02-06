export type GetLastItems<T> = (array: T[], options?: any) => ILastItemsResponse<T>;
export interface ILastItemsOptions {
    from: number;
    get: number;
    full: boolean;
}
export interface ILastItemsResponse<T> {
    [key: string]: T[];
}