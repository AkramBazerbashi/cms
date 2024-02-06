export type IMessageTitle = 'Created' | 'Updated' | 'Deleted' | any;

export interface IMessageData {
    url: string;
    content?: any;
}

export interface ILanguage {
    en: string;
    ar: string;
}