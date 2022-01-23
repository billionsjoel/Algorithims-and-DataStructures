function birthdayCakeCandles(candles) {
	// Write your code here
	let count = 0;
	let copyArr = candles;
	//get all candles ?
	//sort the candles
	let sorted = copyArr.sort();
	//console.log(sorted);

	//get the last candle
	let lastCandle = sorted[sorted.length - 1];
	//console.log(lastCandle);

	//loop through all candles and count everytime you meet tallest candle
	for (let i = 0; i <= candles.length; i++) {
		if (candles[i] === lastCandle) {
			count++;
		}
		if (candles[i] > lastCandle) {
			lastCandle = candles[i];
			count = 1;
		}
	}

	console.log(count);
}
birthdayCakeCandles([3, 2, 1, 3, 3]);
