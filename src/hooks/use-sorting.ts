import Color from "color";
import { useEffect, useState } from "react";
import { Characteristic } from "../library/sorting/sort-color-by-priority";
import sortColorGrid from "../library/sorting/sort-color-grid";

// returns an array of colors sorted by the given priority
const useSorting = (
	values: Array<Color>,
	sortFull: Array<Characteristic>,
	sortRows: Array<Characteristic>,
	sortColumns: Array<Characteristic>
) => {
	const [sortedColors, setSortedColors] = useState(values);
	useEffect(() => {
		let timer = setTimeout(
			() =>
				sortColorGrid(
					values,
					sortFull,
					sortRows,
					sortColumns,
					setSortedColors
				),
			500
		);
		return () => clearTimeout(timer);
	}, [
		JSON.stringify(values),
		JSON.stringify(sortFull),
		JSON.stringify(sortRows),
		JSON.stringify(sortColumns),
	]);

	return sortedColors;
};

export default useSorting;
