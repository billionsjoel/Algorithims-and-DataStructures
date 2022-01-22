function staircase(n) {
	// Write your code here
	for (let i = 0; i < n; i++) {
		for (let j = 0; j < i; j++) {
			if (j === 0) {
				for (let k = 0; k < n - i; k++) console.log(' ');
			}
			console.log('#');
		}
		console.log('\n');
	}
}

staircase(6);
