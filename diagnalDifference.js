function diagonalDifference(arr) {
	// Write your code here
	const n = arr.splice(0, 1);

	let row1 = arr.splice(0, 3);
	let row2 = arr.splice(0, 3);
	let row3 = arr.splice(0, 3);

	let left = row1[0] + row2[1] + row3[2];
	let right = row1[2] + row2[1] + row3[0];

	return Math.abs(left - right);
}

diagonalDifference([
	[11, 2, 4],
	[4, 5, 6],
	[10, 8, -12],
]);
