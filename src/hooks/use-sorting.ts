import Color from "color";
import { flatten, chunk } from "lodash";
import sortColorByPriority from "../library/sorting/sort-color-by-priority";

// returns an array of colors sorted by the given priority

const useSorting = (values: Array<Color>) => {
	const sortedValues = values.sort(sortColorByPriority(["chroma"]));

	const rowSize = 256;

	const rows = chunk(sortedValues, rowSize);
	const sortedRows = rows.map((row) =>
		row.sort(sortColorByPriority(["hue"]))
	);
	let columns = [];
	for (let index = 0; index < rowSize; index++) {
		columns[index] = sortedRows.map((row) => row[index]);
	}
	const sortedColumns = columns.map((column) =>
		column.sort(sortColorByPriority(["luminosity"]))
	);
	let final = [];
	for (let index = 0; index < rows.length; index++) {
		final[index] = sortedColumns.map((column) => column[index]);
	}
	return flatten(final);
};

export default useSorting;
