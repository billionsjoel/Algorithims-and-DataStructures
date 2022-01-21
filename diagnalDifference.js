function diagonalDifference(arr) {
	// Write your code here
	const n = arr.length;
	let leftD,
		rightD = 0;
	for (let i = 0; i < n; i++) {
		for (let j = 0; j < n; j++) {
			leftD = arr[0][0] + arr[1][1] + arr[2][2];
			rightD = arr[2][0] + arr[1][1] + arr[0][2];
		}
	}

	console.log(Math.abs(leftD - rightD));
	//console.log(row2[1][1]);
}

diagonalDifference([
	[11, 2, 4],
	[4, 5, 6],
	[10, 8, -12],
]);
