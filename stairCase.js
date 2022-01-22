function staircase(n) {
	// Write your code here
	for (let i = 1; i <= n; i++) {
		console.log(' '.repeat(n - i) + '#'.repeat(i));
	}
}

staircase(6);
