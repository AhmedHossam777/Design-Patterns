import { Product } from './Product';
import { Offer } from './Offer';

export class User {
	constructor(
		private readonly name: string,
		private readonly isSubscribedToProducts: boolean,
		private readonly isSubscribedToOffers: boolean,
	) {}

	public getName() {
		return this.name;
	}

	public getIsSubscribedToProducts() {
		return this.isSubscribedToProducts;
	}

	public getIsSubscribedToOffers() {
		return this.isSubscribedToOffers;
	}

	public notify(notification: Product | Offer): void {
		if (notification instanceof Product) {
			console.log(
				`notifying user: ${this.name} about new product: ${notification.getName()}`,
			);
		} else {
			console.log(
				`notifying user: ${this.name} about new offer ${notification.getMessage()}`,
			);
		}
	}
}
