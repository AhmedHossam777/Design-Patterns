interface UserDetails {
	name: string;
	age: number;
	email: string;
}

interface Prototype {
	clone(): Prototype;
	getUserDetails(): UserDetails;
}

class ConcretePrototype implements Prototype {
	constructor(private readonly user: UserDetails) {}

	public clone(): Prototype {
		const clone = Object.create(this);
		clone.user = { ...this.user };

		return clone;
	}

	public getUserDetails(): UserDetails {
		return this.user;
	}
}

let user1 = new ConcretePrototype({
	name: 'ahmed',
	age: 22,
	email: 'ahmed@email.com',
});

let user2 = user1.clone();

console.log(user1 === user2); // false
