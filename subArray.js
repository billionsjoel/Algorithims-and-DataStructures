function birthday(s, d, m) {
	// Write your code here
	let sum = 0;
	let count = 0;
	if (s.length <= 1) {
		sum = s[0];
		if (sum === d) {
			count += 1;
		}
	}

	for (let i = 0; i < s.length; i++) {
		sum = s[i] + s[i + 1];
		if (sum === d) {
			count++;
		}
	}

	//console.log(count);
	console.log(count);
}

birthday([4], 4, 1);
