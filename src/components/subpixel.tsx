import SubpixelValueOutOfRangeError from "./subpixel-value-out-of-range-error";
import styled from "styled-components";

const colors = {
	red: (value: number) => `rgb(${value},0,0)`,
	green: (value: number) => `rgb(0,${value},0)`,
	blue: (value: number) => `rgb(0,0,${value})`,
};

interface Props {
	color: keyof typeof colors;
	value: number;
}

const StyledSubpixel = styled.div`
	width: 1px;
	height: 3px;
	background-color: ${({ color, value }: Props) => colors[color](value)};
`;

const Subpixel = ({ color, value }: Props) => {
	if (value < 0 || value > 256) {
		throw new SubpixelValueOutOfRangeError();
	}

	return <StyledSubpixel color={color} value={value} />;
};

export default Subpixel;
