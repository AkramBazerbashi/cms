import { IMainMessage } from "../../../interfaces/response.interface";

export type IStatus = 'success' | 'danger' | 'info' | 'warning';
export interface IAlertMessage {
    show?: boolean;
    status: IStatus;
    title: IMainMessage;
    subtitle: string;
    options?: any;
}

export interface IAlertOptions {
    icon: string;
    bgCard: string;
    bgIcon: string;
}