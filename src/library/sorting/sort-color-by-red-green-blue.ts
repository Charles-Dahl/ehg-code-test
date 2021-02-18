import Color from "color";

export default (firstColor: Color, secondColor: Color) => {
	const redDifference = secondColor.red() - firstColor.red();
	if (redDifference !== 0) {
		return redDifference;
	}
	const greenDifference = secondColor.green() - firstColor.green();
	if (greenDifference !== 0) {
		return greenDifference;
	}
	return secondColor.blue() - firstColor.blue();
};
