import Color from "color";

// Get the difference in a characteristic between two colors
const getHueDifference = (firstColor: Color, secondColor: Color) =>
	secondColor.hue() - firstColor.hue();
const getSaturationvDifference = (firstColor: Color, secondColor: Color) =>
	secondColor.saturationv() - firstColor.saturationv();
const getSaturationlDifference = (firstColor: Color, secondColor: Color) =>
	secondColor.saturationl() - firstColor.saturationl();
const getValueDifference = (firstColor: Color, secondColor: Color) =>
	secondColor.value() - firstColor.value();
const getLuminosityDifference = (firstColor: Color, secondColor: Color) =>
	secondColor.luminosity() - firstColor.luminosity();
const getRedDifference = (firstColor: Color, secondColor: Color) =>
	secondColor.red() - firstColor.red();
const getGreenDifference = (firstColor: Color, secondColor: Color) =>
	secondColor.green() - firstColor.green();
const getBlueDifference = (firstColor: Color, secondColor: Color) =>
	secondColor.blue() - firstColor.blue();
const getCyanDifference = (firstColor: Color, secondColor: Color) =>
	secondColor.cyan() - firstColor.cyan();
const getMagentaDifference = (firstColor: Color, secondColor: Color) =>
	secondColor.magenta() - firstColor.magenta();
const getYellowDifference = (firstColor: Color, secondColor: Color) =>
	secondColor.yellow() - firstColor.yellow();
const getBlackDifference = (firstColor: Color, secondColor: Color) =>
	secondColor.black() - firstColor.black();
const getContrastDifference = (firstColor: Color, secondColor: Color) =>
	secondColor.contrast(firstColor);
const getChromaDifference = (firstColor: Color, secondColor: Color) =>
	secondColor.chroma() - firstColor.chroma();
const getDistance = (firstColor: Color, secondColor: Color) =>
	Math.sqrt(
		Math.pow(secondColor.red() - firstColor.red(), 2) +
			Math.pow(secondColor.green() - firstColor.green(), 2) +
			Math.pow(secondColor.blue() - firstColor.blue(), 2)
	);
const getPrimaryDifference = (firstColor: Color, secondColor: Color) => {
	const primaryColor = firstColor.chroma;
	const redDifference = getRedDifference(firstColor, secondColor);
};

// A Dictionary for the color characteristics and the functions to get the difference - also used for type definitions;
const characteristics = {
	hue: getHueDifference,
	saturationv: getSaturationvDifference,
	saturationl: getSaturationlDifference,
	value: getValueDifference,
	luminosity: getLuminosityDifference,
	red: getRedDifference,
	green: getGreenDifference,
	blue: getBlueDifference,
	cyan: getCyanDifference,
	magenta: getMagentaDifference,
	yellow: getYellowDifference,
	black: getBlackDifference,
	contrast: getContrastDifference,
	chroma: getChromaDifference,
	distance: getDistance,
};

type Characteristic = keyof typeof characteristics;

// Returns a sort function for two colors based on an optional priority array of characteristics
export default (
	priority: Array<Characteristic> = ["hue", "saturationl", "luminosity"]
) => (firstColor: Color, secondColor: Color) => {
	if (priority.length === 0) {
		return 0;
	}
	// For each characteristic in the sort priority, get the difference and return it if it is not zero otherwise
	// continue to the next characteristic
	for (let index = 0; index < priority.length - 1; index++) {
		const characteristic = priority[index];
		const difference = characteristics[characteristic](
			firstColor,
			secondColor
		);
		if (difference !== 0) {
			return difference;
		}
	}

	// Return the difference in the last characteristic whether or not it is equal to zero
	return characteristics[priority[priority.length - 1]](
		firstColor,
		secondColor
	);
};
