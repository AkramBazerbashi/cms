export class FilterModel {
    installments?: string;
    date_full?: {
        start: Date;
        end: Date;
    };
    created_at_from: Date;
    created_at_to: Date;
    start_date?: string;
    end_date?: string;
    name?: string;
    clients_name?: string;
    page?: number = 1;
    limit?: number = 5;
    gender?: string = '';
    amount?: number;
    student_lang_level?: string;
    max_members?: string = '';
    cat_ids?: any[] = [];
    section?: string = '';
    subscription?: string = '';
    price?: number[] = [];
    rate?: number = 0;
    hours?: number[] = [];
    level?: string = '';
    tags?: string = '';
}

export enum FilterItems {
    NAME = 'name',
    HOURS = 'hours',
    TAGS = 'tags',
    START_DATE = 'start_date',
    END_DATE = 'end_date'
}
