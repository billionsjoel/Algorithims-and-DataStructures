function plusMinus(arr) {
	// Write your code here
	let postive = 0;
	let negative = 0;
	let zero = 0;

	for (let i = 0; i < arr.length; i++) {
		if (arr[i] === 0) {
			zero++;
		}
		if (arr[i] > 0) {
			postive++;
		}
		if (arr[i] < 0) {
			negative++;
		}
	}

	console.log(postive / arr.length);
	console.log(negative / arr.length);
	console.log(zero / arr.length);
}
plusMinus([-4, 3, -9, 0, 4, 1]);
