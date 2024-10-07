import { INotification } from './INotification';

export class EmailNotification implements INotification {
	send(message: string): void {
		console.log('Email: ' + message);
	}
}
