import React from "react";
import styled from "styled-components";
import Pixel from "./pixel";
import Color from "color";
import useSorting from "../hooks/use-sorting";

const ImageContainer = styled.div`
	display: grid;
	grid-template-columns: repeat(256, 5px);
`;

const Image = () => {
	const values = [];
	for (let redIndex = 32; redIndex > 0; redIndex--) {
		for (let greenIndex = 32; greenIndex > 0; greenIndex--) {
			for (let blueIndex = 32; blueIndex > 0; blueIndex--) {
				values.push(
					Color.rgb(redIndex * 8, greenIndex * 8, blueIndex * 8)
				);
			}
		}
	}

	const sortedValues = useSorting(values);
	return (
		<ImageContainer>
			{sortedValues.map((value) => {
				const colorString = value.string();
				return <Pixel color={colorString} key={colorString} />;
			})}
		</ImageContainer>
	);
};

export default Image;
