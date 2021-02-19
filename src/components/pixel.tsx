import styled from "styled-components";
import { pixelSize } from "../config";

interface PixelProps {
	color: string;
}

const Pixel = styled.div.attrs<PixelProps>(({ color }) => ({
	style: {
		backgroundColor: color,
	},
}))<PixelProps>`
	width: ${pixelSize};
	height: ${pixelSize};
`;

export default Pixel;
