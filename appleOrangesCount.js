function countApplesAndOranges(s, t, a, b, apples, oranges) {
	// Write your code here
	let appleDistances = [];
	let orangeDistances = [];
	let appleCount = 0;
	let orangeCount = 0;

	apples.forEach((element) => {
		appleDistances.push(element + a[0]);
	});
	oranges.forEach((element) => {
		orangeDistances.push(element + a[1]);
	});

	appleDistances.forEach((element) => {
		if (element >= s && element <= t) {
			appleCount++;
		}
	});
	orangeDistances.forEach((element) => {
		if (element >= s && element <= t) {
			orangeCount++;
		}
	});

}

countApplesAndOranges(7, 11, [5, 15], [3, 2], [-2, 2, 1], [5, -6]);
