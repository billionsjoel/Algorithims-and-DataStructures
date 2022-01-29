function breakingRecords(scores) {
	// Write your code here
	let highCount = 0;
	let lowCount = 0;
	let low = scores[0];
	let high = scores[0];
	let arr = [];

	scores.forEach((element) => {
		if (element > high) {
			highCount++;
			high = element;
		}
	});

	scores.forEach((element) => {
		if (element < low) {
			lowCount++;
			low = element;
			//console.log(scores[0]);
		}
	});

	arr.push(highCount);
	arr.push(lowCount);

	console.log(arr);
}

breakingRecords([10, 5, 20, 20, 4, 5, 2, 25, 1]);
breakingRecords([3, 4, 21, 36, 10, 28, 35, 5, 24, 42]);
