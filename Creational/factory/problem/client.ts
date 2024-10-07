import { EmailNotification } from './EmailNotification';
import { SMSNotification } from './SMSNotification';
import { PushNotification } from './PushNotification';

function sendNotification(channel: string, message: string): void {
	if (channel === 'email') {
		const emailNotification = new EmailNotification();
		emailNotification.send(message);
	} else if (channel === 'sms') {
		const smsNotification = new SMSNotification();
		smsNotification.send(message);
	} else if (channel === 'push') {
		const pushNotification = new PushNotification();
		pushNotification.send(message);
	} else {
		console.log('Invalid notification channel');
	}
}

sendNotification('email', 'This is an email message'); // Output: Sending Email with message: This is an email message
sendNotification('sms', 'This is an SMS message'); // Output: Sending SMS with message: This is an SMS message
sendNotification('push', 'This is a push notification'); // Output: Sending Push Notification with message: This is a push notification
