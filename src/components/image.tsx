import React from "react";
import styled from "styled-components";
import Pixel from "./pixel";

const ImageContainer = styled.div`
	display: grid;
	grid-template-columns: repeat(256, 1px);
	grid-template-rows: repeat(128, 1px);
`;

const Image = () => {
	const values = [];
	for (let redIndex = 32; redIndex > 0; redIndex--) {
		for (let greenIndex = 32; greenIndex > 0; greenIndex--) {
			for (let blueIndex = 32; blueIndex > 0; blueIndex--) {
				values.push({
					red: redIndex * 8,
					green: greenIndex * 8,
					blue: blueIndex * 8,
				});
			}
		}
	}

	return (
		<ImageContainer>
			{values.map((value) => (
				<Pixel {...value} />
			))}
		</ImageContainer>
	);
};

export default Image;
