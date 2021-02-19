import styled from "styled-components";

import { pixelSize } from "../config";

interface PixelProps {
	firstColor: string;
	secondColor: string;
}

const Pixel = styled.div.attrs<PixelProps>(({ firstColor, secondColor }) => ({
	style: {
		backgroundColor: firstColor,
		borderColor: secondColor,
	},
}))<PixelProps>`
	width: calc(${pixelSize} * 2);
	height: ${pixelSize};
	border-width: 0;
	border-left-width: ${pixelSize};
	border-style: solid;
	box-sizing: border-box;
`;

export default Pixel;
