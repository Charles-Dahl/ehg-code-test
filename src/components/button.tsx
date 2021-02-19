import styled from "styled-components";

interface ButtonProps {
	active: boolean;
}

const Button = styled.button`
	background-color: ${({ active = false }: ButtonProps) =>
		active ? "#282828" : "#cccccc"};
	color: #ebebeb;
	border: none;
	padding: 10px;
	margin: 10px;
	border-radius: 3px;

	&:hover {
		background-color: #ebebeb;
		color: #282828;
	}
`;

export default Button;
