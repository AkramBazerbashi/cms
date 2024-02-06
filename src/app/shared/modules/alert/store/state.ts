import { IAlertState } from "../interfaces/state.interface";

export const alertState: IAlertState = {
    message: {
        options: {
            icon: '',
            bgCard: '',
            bgIcon: ''
        },
        status: "success",
        subtitle: '',
        title: 'Created',
        show: false
    },
}