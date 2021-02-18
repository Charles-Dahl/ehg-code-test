import Color from "color";

export default (firstColor: Color, secondColor: Color) => {
	const hueDifference = secondColor.hue() - firstColor.hue();
	if (hueDifference !== 0) {
		return hueDifference;
	}
	const saturationDifference =
		secondColor.saturationv() - firstColor.saturationv();
	if (saturationDifference !== 0) {
		return saturationDifference;
	}
	return secondColor.value() - firstColor.value();
};
