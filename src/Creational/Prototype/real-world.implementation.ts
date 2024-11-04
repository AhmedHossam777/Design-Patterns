interface ShapeProperties {
	color: string;
	x: number;
	y: number;
}

abstract class Shape {
	constructor(private readonly properties: ShapeProperties) {}

	public abstract clone(): Shape;
	public abstract getShapeDetails(): ShapeProperties;
}

class Rectangle extends Shape {
	constructor(
		rectangleProperties: ShapeProperties,
		public width: number,
		public height: number
	) {
		super(rectangleProperties);
	}
	public clone(): Shape {
		const clonedProperties: ShapeProperties = {
			color: this.
		};
	}

	public getShapeDetails(): ShapeProperties {
		// return this.rectangleProperties;
	}
}
