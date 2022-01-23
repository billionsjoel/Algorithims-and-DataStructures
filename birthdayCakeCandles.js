function birthdayCakeCandles(candles) {
	// Write your code here
	let max = 0;
	let counter = 0;

	candles.forEach((item) => {
		if (item > max) {
			max = item;
			counter = 1;
		} else if (item === max) {
			counter++;
		}
	});
	console.log(counter);
}
birthdayCakeCandles([3, 2, 1, 3, 3]);
