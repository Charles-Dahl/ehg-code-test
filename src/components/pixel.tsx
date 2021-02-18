import styled from "styled-components";

interface PixelProps {
	color: string;
}

const Pixel = styled.div.attrs<PixelProps>(({ color }) => ({
	style: {
		backgroundColor: color,
	},
}))<PixelProps>`
	width: 5px;
	height: 5px;
`;

export default Pixel;

// const Component = styled.div.attrs(props => ({
//     style: {
//       background: props.background,
//     },
//   }))`width: 100%;`

//   <Component />
