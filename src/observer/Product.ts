export class Product {
	constructor(
		private readonly name: string,
		private readonly price: number,
	) {}

	public getName() {
		return this.name;
	}

	public getPrice() {
		return this.price;
	}
}
