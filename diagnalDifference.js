function diagonalDifference(arr) {
	// Write your code here
	const n = arr.length;
	let leftD = 0;
	let rightD = 0;
	for (let i = 0; i < n; i++) {
		for (let j = 0; j < n; j++) {
			if (i === j) {
				leftD += arr[i][j];
			}
			if (i + j === n - 1) {
				rightD += arr[i][j];
			}
		}
	}

	console.log(Math.abs(leftD - rightD));
}

diagonalDifference([
	[11, 2, 4],
	[4, 5, 6],
	[10, 8, -12],
]);
