class Singleton {
	private static instance: Singleton;

	private constructor() {}

	private static _value: number;

	get value(): number {
		return Singleton._value;
	}

	set value(value: number) {
		Singleton._value = value;
	}

	public static getInstance(): Singleton {
		if (!Singleton.instance) {
			Singleton.instance = new Singleton();
		}
		return Singleton.instance;
	}
}

let instance1 = Singleton.getInstance();
let instance2 = Singleton.getInstance();

instance1.value = 10;

console.log(instance1.value); // 10
console.log(instance2.value); // 10

console.log(instance1 === instance2); // true

// the both instance must have the same value if they are not that means that the singleton is not implemented well