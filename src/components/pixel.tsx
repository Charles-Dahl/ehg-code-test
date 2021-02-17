import React from "react";
import styled from "styled-components";
import Subpixel from "./subpixel";

interface PixelProps {
	redValue: number;
	greenValue: number;
	blueValue: number;
}

const StyledPixel = styled.div`
	display: flex;
	flex-direction: row;
`;

const Pixel = ({ redValue, greenValue, blueValue }: PixelProps) => {
	return (
		<StyledPixel>
			<Subpixel color="red" value={redValue} />
			<Subpixel color="green" value={greenValue} />
			<Subpixel color="blue" value={blueValue} />
		</StyledPixel>
	);
};

export default Pixel;
