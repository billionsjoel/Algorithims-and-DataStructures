function birthday(s, d, m) {
	// Write your code here
	let count = 0;

	for (let i = 0; i < s.length; i++) {
		let arr = s.slice(0 + i, m + i);

		if (arr.reduce((a, b) => a + b) === d) {
			count++;
		}
	}

	//console.log(count);
	console.log(count);
}

birthday([4], 4, 1);
