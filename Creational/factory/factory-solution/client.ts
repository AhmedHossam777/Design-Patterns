import { INotification } from './INotification';
import { NotificationFactory } from './NotificationFactory';

function createNotification(channel: string, message: string) {
	const notification: INotification | null =
		NotificationFactory.createNotification(channel);

	if (notification) {
		notification.send(message);
	} else {
		console.log('invalid notification channel');
	}
}

createNotification('sms', 'gg');
createNotification('email', 'gg');
createNotification('push', 'gg');
