function birthdayCakeCandles(candles) {
	// Write your code here
	let count = 0;
	let copyArr = candles;
	//get all candles ?
	//sort the candles
	let sorted = candles.sort();
	console.log(sorted);

	//get the last candle
	let lastCandle = copyArr.pop();
	console.log(lastCandle);

	//loop through all candles and count everytime you meet tallest candle

	//return count
}
birthdayCakeCandles([3, 2, 1, 3]);
