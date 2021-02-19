import React from "react";
import styled from "styled-components";
import Color from "color";

import Pixel from "./pixel";
import { pixelSize } from "../config";

const ImageGrid = styled.div`
	display: grid;
	grid-template-columns: repeat(256, ${pixelSize});
`;

interface ImageProps {
	colors?: Array<Color>;
}

const Image = ({ colors = [] }: ImageProps) => {
	return (
		<ImageGrid>
			{colors.map((color) => {
				const colorString = color.string();
				return <Pixel color={colorString} key={colorString} />;
			})}
		</ImageGrid>
	);
};

export default Image;
