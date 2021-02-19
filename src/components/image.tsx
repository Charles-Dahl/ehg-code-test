import React from "react";
import styled from "styled-components";
import Color from "color";

import Pixel from "./pixel";
import { pixelSize } from "../config";
import { chunk } from "lodash";

const ImageGrid = styled.div`
	display: grid;
	grid-template-columns: repeat(128, calc(${pixelSize} * 2));
`;

interface ImageProps {
	colors?: Array<Color>;
}

const Image = ({ colors = [] }: ImageProps) => {
	const pairs = chunk(colors, 2);
	return (
		<ImageGrid>
			{pairs.map((colorPair) => {
				const colorString = `${colorPair[0].string()}${colorPair[1].string()}`;
				return (
					<Pixel
						firstColor={colorPair[0].string()}
						secondColor={colorPair[1].string()}
						key={colorString}
					/>
				);
			})}
		</ImageGrid>
	);
};

export default Image;
