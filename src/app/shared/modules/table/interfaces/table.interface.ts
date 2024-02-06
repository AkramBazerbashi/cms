export interface PaginationValue {
    page?: number;
    pageSize: number;
    totalRows?: number;
}

export interface PaginatedResponse<T> {
    items: T[];
    total: number;
}
