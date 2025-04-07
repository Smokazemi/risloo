export interface Pagination {
    prevIndex: string;
    nextIndex: string;
    totalItems: number;
    itemsPerPage: number;
}

export interface ServiceResponseList<T> {
    data?: T[];
    pagination?: Pagination;
    error?: string;
    status: number;
    message: string;
}
export interface ServiceResponseSingle<T> {
    data?: T;
    error?: string;
    status: number;
    message: string;
}