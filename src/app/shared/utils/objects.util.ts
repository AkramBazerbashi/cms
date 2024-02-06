import { IPaginationsResponse, IStateResponse } from "../interfaces/response.interface";

export const checkFieldsValue = (object: any): boolean => Object.values(object).every(Boolean);

export const checkFieldsKeys = (object: any): boolean => Object.keys(object).every(Boolean);

export const toStringConverter = (object: any): string => JSON.stringify(object);

export const toObjectConverter = (object: string): object => JSON.parse(object);

export const deepCopy = (object: any): typeof object => JSON.parse(JSON.stringify(object));

export const recognizeResponse: (obj: IPaginationsResponse<any>) => 
    IStateResponse<any> = (object: IPaginationsResponse<any>) => ({
        current_page: object.current_page,
        data: object.data,
        last_page: object.last_page,
        per_page: object.per_page,
        total: object.total
    })