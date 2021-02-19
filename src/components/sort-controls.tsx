import React from "react";
import styled from "styled-components";

import Button from "./button";
import Title from "./title";
import { Characteristic } from "../library/sorting/sort-color-by-priority";

const OuterContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`;

const InnerContainer = styled.ul`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-around;
	list-style-type: none;
	margin: 0;
	padding: 20px;
	width: 100%;
`;

interface SortControlProps {
	title?: string;
	sortPriority: Array<Characteristic>;
	toggleCharacteristic: (arg: Characteristic) => void;
}

const SortControls = ({
	title = "",
	sortPriority,
	toggleCharacteristic,
}: SortControlProps) => {
	const isActive = (characteristic: Characteristic) =>
		sortPriority.some((value) => value === characteristic);

	return (
		<OuterContainer>
			<Title>{title}</Title>
			<InnerContainer>
				<Button
					active={isActive("chroma")}
					onClick={() => toggleCharacteristic("chroma")}
				>
					Chroma
				</Button>
				<Button
					active={isActive("hue")}
					onClick={() => toggleCharacteristic("hue")}
				>
					Hue
				</Button>
				<Button
					active={isActive("saturationv")}
					onClick={() => toggleCharacteristic("saturationv")}
				>
					Saturation(Value)
				</Button>
				<Button
					active={isActive("value")}
					onClick={() => toggleCharacteristic("value")}
				>
					Value
				</Button>
				<Button
					active={isActive("saturationl")}
					onClick={() => toggleCharacteristic("saturationl")}
				>
					Saturation(Luminosity)
				</Button>
				<Button
					active={isActive("luminosity")}
					onClick={() => toggleCharacteristic("luminosity")}
				>
					Luminosity
				</Button>
			</InnerContainer>
		</OuterContainer>
	);
};
export default SortControls;
