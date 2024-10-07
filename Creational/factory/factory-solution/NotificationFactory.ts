import { EmailNotification } from './EmailNotification';
import { SMSNotification } from './SMSNotification';
import { INotification } from './INotification';
import { PushNotification } from './PushNotification';

export class NotificationFactory {
	static createNotification(channel: string): INotification | null {
		switch (channel.toLowerCase()) {
			case 'email':
				return new EmailNotification();
			case 'sms':
				return new SMSNotification();
			case 'push':
				return new PushNotification();
			default:
				return null;
		}
	}
}
