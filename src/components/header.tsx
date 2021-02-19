import React from "react";
import styled from "styled-components";

import Title from "./title";

const Container = styled.header`
	background-color: #ebebeb;
	grid-area: header;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const Header = () => {
	return (
		<Container>
			<Title>EHG Code Test</Title>
		</Container>
	);
};
export default Header;
