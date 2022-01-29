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




	console.log(arr);
}

breakingRecords([10, 5, 20, 20, 4, 5, 2, 25, 1]);
