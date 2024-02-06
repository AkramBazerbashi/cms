import { Action, Selector } from "@ngrx/store";
import { UserRoles } from "../../../../pages/manage-users/interfaces";
import { IQueryParams } from "../../../interfaces/services.interface";

export type FilterType = 'SELECT' | 'INPUT' | 'RADIO' | 'DATE' | 'DATE_RANGE' | 'CHECK_BOX';
export type InputType = 'text' | 'number' | 'email';
type FilterItemMethod = (params: { username?: string; email?: string; role?: UserRoles; className?: string }) => Action;
type DataFilterMethod = (params: { queryParams: IQueryParams }) => Action;

interface IFilterItem {
    searchParams: string;
    type: FilterType;
    inputType?: InputType;
    title?: string;
    dateRange?: {
        start: string;
        end: string;
    };
    searchOptions?: {
        method: FilterItemMethod;
        selector: Selector<any, any>;
        queryParam: 'email' | 'username' | 'className';
        role?: UserRoles;
    }
    items?: Array<string> | Array<{ title: string; value: string | number; }>;
}

export interface IDataFilters {
    filterMethod: DataFilterMethod;
    filterItems: IFilterItem[];
}