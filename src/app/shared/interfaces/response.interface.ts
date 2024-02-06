export type IStatus = 'pending' | 'loading' | 'error' | 'success';

export type IMainMessage = any;

export interface IKeyValue<T> {
    [key: string]: T
}

export type IModelStatus = 'NOT_CREATED' |
    'CREATE_FROM_CREATE' |
    'CREATE_FROM_EDIT' |
    'CREATED' |
    'UPDATE_FROM_EDIT' |
    'UPDATE_FROM_CREATE' |
    'UPDATED' |
    'DELETE_FROM_CREATE' |
    'DELETE_FROM_EDIT'


export interface ISuccessResponse<T> {
    success: boolean;
    message: string;
    main_message?: IMainMessage;
    error_code?: number;
    result: T;
}
export interface IFailResponse {
    message: string;
    errors: {
        [key: string]: string[]
    }
}
export interface ILink {
    url: string;
    label: string;
    active: boolean;
}
export interface IPaginationsResponse<T> {
    current_page: number;
    data: T;
    first_page_url: string;
    from?: any;
    last_page: number;
    last_page_url: string;
    links: ILink[];
    next_page_url?: any;
    path: string;
    per_page: number;
    prev_page_url?: any;
    to?: any;
    total: number;
}
export interface IStateResponse<T> {
    data: T;
    current_page: number;
    last_page: number;
    per_page: number;
    total: number;
}

export interface IPagination {
    current_page: number;
    last_page: number;
    per_page: number;
    total: number;
}