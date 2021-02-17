export default class SubpixelValueOutOfRangeError extends Error {
	constructor() {
		super("Value out of range: value must be between 0 and 256");
		this.name = "SubpixelValueOutOfRangeError";
	}
}
