import styled from "styled-components";

interface PixelProps {
	red: number;
	green: number;
	blue: number;
}

const Pixel = styled.div.attrs<PixelProps>(({ red, green, blue }) => ({
	style: {
		backgroundColor: `rgb(${red}, ${green}, ${blue})`,
	},
}))<PixelProps>`
	width: 1px;
	height: 1px;
`;

export default Pixel;

// const Component = styled.div.attrs(props => ({
//     style: {
//       background: props.background,
//     },
//   }))`width: 100%;`

//   <Component />
