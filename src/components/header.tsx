import React from "react";
import styled from "styled-components";

import Title from "./title";

const Header = styled.header`
	background-color: #ebebeb;
	grid-area: header;
	display: flex;
	justify-content: center;
	align-items: center;
`;

export default () => {
	return (
		<Header>
			<Title>EHG Code Test</Title>
		</Header>
	);
};
