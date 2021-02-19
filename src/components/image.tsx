import React from "react";
import styled from "styled-components";
import Color from "color";

import Pixel from "./pixel";
import { pixelSize } from "../config";
import { chunk } from "lodash";

const ImageGrid = styled.div`
	display: grid;
	grid-template-columns: repeat(64, calc(${pixelSize} * 4));
`;

interface ImageProps {
	colors?: Array<Color>;
}

const Image = ({ colors = [] }: ImageProps) => {
	const colorGroups = chunk(colors, 4);
	return (
		<ImageGrid>
			{colorGroups.map((group) => {
				const colorString = group.reduce(
					(colorString, color) => `${colorString}${color.string()}`,
					""
				);
				return <Pixel colors={group} key={colorString} />;
			})}
		</ImageGrid>
	);
};

export default Image;
