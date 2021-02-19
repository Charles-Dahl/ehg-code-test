import Color from "color";
import styled from "styled-components";

import { pixelSize } from "../config";

interface PixelProps {
	colors: Color[];
}

// Each 'pixel' displays 4 colours in a row in order to reduce the number of components being rendered
// This is achieved by using background image and adding a solid colour 'gradient' for each colour
// (background image doesn't allow solid colour naturally) and each colour covers 25% of the background

const Pixel = styled.div.attrs<PixelProps>(({ colors }) => ({
	style: {
		backgroundImage: colors.reduce((backgroundString, color, index) => {
			const colorString = color.string();
			return `${backgroundString}linear-gradient(0deg, ${colorString} 0%, ${colorString} 100%)${
				index !== 3 ? "," : ""
			}`;
		}, ""),
	},
}))<PixelProps>`
	width: calc(${pixelSize} * 4);
	height: ${pixelSize};
	background-repeat: no-repeat;
	background-size: 25%, 50%, 75%, 100%;
`;

export default Pixel;
