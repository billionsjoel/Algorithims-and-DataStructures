function staircase(n) {
	// Write your code here
	for (let i = 1; i < n; i++) {
		for (let j = 1; j < i; j++) {
			if (j === 0) {
				for (let k = 0; k < n - i; i++) console.log(' ');
			}
			console.log('#');
		}
		console.log('\n');
	}
}

staircase(6);
