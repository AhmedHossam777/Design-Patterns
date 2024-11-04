// Singleton logger class
// log method
// can have multiple method
class Logger {
	private static instance: Logger;
	private constructor() {}

	public static get getInstance(): Logger {
		if (!Logger.instance) {
			Logger.instance = new Logger();
		}
		return Logger.instance;
	}

	public log(message: string) {
		const date = new Date();
		console.log(`[${date.toLocaleString()}] - ${message}`);
	}
}

const logger1 = Logger.getInstance;
const logger2 = Logger.getInstance;

logger1.log('aldod');

logger2.log('message');
