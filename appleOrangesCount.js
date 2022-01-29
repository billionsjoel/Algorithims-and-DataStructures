function countApplesAndOranges(s, t, a, b, apples, oranges) {
	// Write your code here

	let appleDistances = [];
	let orangeDistances = [];
	let appleCount = 0;
	let orangeCount = 0;

	apples.forEach((element) => {
		appleDistances.push(element + a);
	});
	oranges.forEach((element) => {
		orangeDistances.push(element + b);
	});

	appleDistances.forEach((element) => {
		if (element >= s && element <= t) {
			appleCount += 1;
		}
	});
	orangeDistances.forEach((element) => {
		if (element >= s && element <= t) {
			orangeCount += 1;
		}
	});

	console.log(appleCount);
	console.log(orangeCount);
}

countApplesAndOranges(7, 11, 5, 15, [-2, 2, 1], [5, -6]);
