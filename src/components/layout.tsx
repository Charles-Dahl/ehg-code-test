import React, { ReactNode } from "react";
import styled from "styled-components";

import Header from "./header";
import Content from "./content";
import Footer from "./footer";

const Container = styled.div`
	display: grid;
	grid-template-columns: 1fr minmax(200px, 500px) minmax(200px, 500px) 1fr;
	grid-template-rows: 100px 1fr 200px;
	grid-template-areas:
		"header header header header"
		"marginleft main main marginright"
		"footer footer footer footer";
	width: 100%;
	height: 100%;
`;

interface LayoutProps {
	children?: ReactNode;
}

export default ({ children }: LayoutProps) => {
	return (
		<Container>
			<Header />
			<Content>{children}</Content>
			<Footer />
		</Container>
	);
};
