function breakingRecords(scores) {
	// Write your code here
	let high = 0;
	let low = 0;
	let arr = [];
	scores.forEach((element) => {
		if (element > scores[0]) {
			high += 1;
			scores[0] = element;
		}
	});
	scores.forEach((element) => {
		if (element < scores[0]) {
			low += 1;
			scores[0] = element;
		} else {
			low = 0;
		}
	});

	arr.push(high);
	arr.push(low);

	console.log(arr);
}

breakingRecords([3, 4, 21, 36, 10, 28, 35, 5, 24, 42]);
