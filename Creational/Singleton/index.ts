// Singleton Logger Class
// log method
// Can have multiple methods

class Logger {
	private static instance: Logger;

	private constructor() {}

	public static getInstance(): Logger {
		if (!Logger.instance) {
			Logger.instance = new Logger();
		}
		return Logger.instance;
	}

	public log(message: string) {
		console.log(message);
	}
}

const logger = Logger.getInstance();

logger.log('hello, world');