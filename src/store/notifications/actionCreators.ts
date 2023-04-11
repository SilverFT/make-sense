import {INotification, NotificationsActionType} from './types';
import {Action} from '../Actions';

export function submitNewNotification(notification: INotification): NotificationsActionType {
    // notification
    // {
    //     "id": "3bc3a024-b90e-4259-a740-488f31ecfab6",
    //     "type": "ERROR",
    //     "header": "Non unique label names",
    //     "description": "Looks like not all your label names are unique. Unique names are necessary to guarantee correct data export when you complete your work. Make your names unique and try again."
    // }
    return {
        type: Action.SUBMIT_NEW_NOTIFICATION,
        payload: {
            notification,
        },
    };
}


export function deleteNotificationById(id: string): NotificationsActionType {
    return {
        type: Action.DELETE_NOTIFICATION_BY_ID,
        payload: {
            id,
        },
    };
}
