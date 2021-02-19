import Color from "color";
import { flatten, chunk } from "lodash";

import sortColorByPriority, { Characteristic } from "./sort-color-by-priority";

const sortColorGrid = (
	values: Array<Color>,
	sortFull: Array<Characteristic>,
	sortRows: Array<Characteristic>,
	sortColumns: Array<Characteristic>,
	callback: (arg: Array<Color>) => void
) => {
	// First sort all colours in the image
	const sortedValues = values.sort(sortColorByPriority(sortFull));

	// Then sort the colours in each row
	const rowSize = 256;
	const rows = chunk(sortedValues, rowSize);
	const sortedRows = rows.map((row) =>
		row.sort(sortColorByPriority(sortRows))
	);

	// Finally sort the colours in each column
	let columns = [];
	for (let index = 0; index < rowSize; index++) {
		columns[index] = sortedRows.map((row) => row[index]);
	}
	const sortedColumns = columns.map((column) =>
		column.sort(sortColorByPriority(sortColumns))
	);
	let final: Array<Array<Color>> = [];
	for (let index = 0; index < rows.length; index++) {
		final[index] = sortedColumns.map((column) => column[index]);
	}
	callback(flatten(final));
};

export default sortColorGrid;
