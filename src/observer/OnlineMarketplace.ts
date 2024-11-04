import { User } from './User';
import { Product } from './Product';
import { Offer } from './Offer';

export class OnlineMarketplace {
	constructor(
		private readonly users: User[],
		private readonly products: Product[],
		private readonly offers: Offer[],
	) {}

	public addUser(user: User): void {
		this.users.push(user);
	}

	public addNewProduct(product: Product): void {
		this.products.push(product);
		this.notifyUserAboutProduct(product);
	}

	public notifyUserAboutProduct(product: Product): void {
		this.users.forEach((user) => {
			if (!user.getIsSubscribedToProducts()) return;
			user.notify(product);
		});
	}

	public addNewOffer(offer: Offer): void {
		this.offers.push(offer);
		this.notifyUserAboutOffer(offer);
	}

	public notifyUserAboutOffer(offer: Offer): void {
		this.users.forEach((user) => {
			if (!user.getIsSubscribedToOffers()) return;
			user.notify(offer);
		});
	}
}
