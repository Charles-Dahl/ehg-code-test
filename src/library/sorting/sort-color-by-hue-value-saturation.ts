import Color from "color";

export default (firstColor: Color, secondColor: Color) => {
	const hueDifference = secondColor.hue() - firstColor.hue();
	if (hueDifference !== 0) {
		return hueDifference;
	}
	const valueDifference = secondColor.value() - firstColor.value();
	if (valueDifference !== 0) {
		return valueDifference;
	}
	return secondColor.saturationv() - firstColor.saturationv();
};
