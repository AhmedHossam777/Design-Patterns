import { INotification } from './INotification';

export class PushNotification implements INotification {
	send(message: string): void {
		console.log('push notification' + message);
	}
}
