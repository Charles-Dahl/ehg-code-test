import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Color from "color";

import Image from "./image";
import SortControls from "./sort-controls";
import { Characteristic } from "../library/sorting/sort-color-by-priority";
import useSorting from "../hooks/use-sorting";

const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-between;
`;

const ImageContainer = () => {
	const values = [];
	for (let redIndex = 32; redIndex > 0; redIndex--) {
		for (let greenIndex = 32; greenIndex > 0; greenIndex--) {
			for (let blueIndex = 32; blueIndex > 0; blueIndex--) {
				values.push(
					Color.rgb(redIndex * 8, greenIndex * 8, blueIndex * 8)
				);
			}
		}
	}

	const [sortFull, setSortFull] = useState<Array<Characteristic>>([
		"luminosity",
	]);
	const [sortRows, setSortRows] = useState<Array<Characteristic>>(["hue"]);
	const [sortColumns, setSortColumns] = useState<Array<Characteristic>>([]);
	const sortedColors = useSorting(values, sortFull, sortRows, sortColumns);

	const toggleSort = (
		sortPriority: Array<Characteristic>,
		updateSort: React.Dispatch<React.SetStateAction<Array<Characteristic>>>
	) => (characteristic: Characteristic) => {
		if (sortPriority.some((value) => value === characteristic)) {
			return updateSort(
				sortPriority.filter((value) => value !== characteristic)
			);
		}
		return updateSort([characteristic]);
	};

	return (
		<Container>
			<Image colors={sortedColors} />
			<p>
				Use the controls to sort the colours by different
				characteristics
			</p>
			<p>
				Sorting is applied to the whole image first, then each row, and
				finally each column
			</p>
			<SortControls
				title="Sort all colors"
				sortPriority={sortFull}
				toggleCharacteristic={toggleSort(sortFull, setSortFull)}
			/>
			<SortControls
				title="Sort each row"
				sortPriority={sortRows}
				toggleCharacteristic={toggleSort(sortRows, setSortRows)}
			/>
			<SortControls
				title="Sort each column"
				sortPriority={sortColumns}
				toggleCharacteristic={toggleSort(sortColumns, setSortColumns)}
			/>
		</Container>
	);
};
export default ImageContainer;
