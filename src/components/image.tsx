import React from "react";
import styled from "styled-components";
import Pixel from "./pixel";

const ImageContainer = styled.div`
	display: grid;
	grid-template-columns: repeat(256, 3px);
	grid-template-rows: repeat(128, 3px);
`;

const Image = () => {
	const values = [
		{ redValue: 8, greenValue: 8, blueValue: 8 },
		{ redValue: 16, greenValue: 16, blueValue: 16 },
	];

	return (
		<ImageContainer>
			{values.map((value) => (
				<Pixel {...value} />
			))}
		</ImageContainer>
	);
};

export default Image;
