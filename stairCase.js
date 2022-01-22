function staircase(n) {
	// Write your code here
	for (let i = 1; i <= n; i++) {
		// print out a " " n-i times and append a # i times
		// console log adds a new line by default
		console.log(' '.repeat(n - i) + '#'.repeat(i));
	}
}

staircase(6);
