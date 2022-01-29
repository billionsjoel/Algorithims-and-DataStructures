function countApplesAndOranges(s, t, a, b, apples, oranges) {
	// Write your code here
	let appleDistances = [];
	let orangeDistances = [];
	apples.forEach((element) => {
		appleDistances.push(element + a[0]);
	});
	oranges.forEach((element) => {
		orangeDistances.push(element + a[1]);
	});

	console.log(appleDistances);
	console.log(orangeDistances);
}

countApplesAndOranges(7, 11, [5, 15], [3, 2], [-2, 2, 1], [5, -6]);
