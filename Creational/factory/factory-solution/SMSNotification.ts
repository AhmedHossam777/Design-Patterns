import { INotification } from './INotification';

export class SMSNotification implements INotification {
	send(message: string): void {
		console.log('SMS: ' + message);
	}
}
