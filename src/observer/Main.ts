import { OnlineMarketplace } from './OnlineMarketplace';
import { User } from './User';
import { Product } from './Product';
import { Offer } from './Offer';

class Main {
	constructor() {
		const users: User[] = [];
		const products: Product[] = [];
		const offers: Offer[] = [];

		const onlineMarketPlace: OnlineMarketplace = new OnlineMarketplace(
			users,
			products,
			offers,
		);
		onlineMarketPlace.addUser(new User('ahmed', true, true));
		onlineMarketPlace.addUser(new User('mahmoud', false, true));
		onlineMarketPlace.addUser(new User('youssef', true, false));
		onlineMarketPlace.addUser(new User('mostafa', false, false));

		onlineMarketPlace.addNewProduct(new Product('mobile', 1000));
		onlineMarketPlace.addNewOffer(new Offer('we have an offer on all phones'));
	}
}

const main = new Main();
