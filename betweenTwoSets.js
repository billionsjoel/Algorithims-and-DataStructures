function getTotalX(a, b) {
	// Write your code here
	let increament = 0;
	let min = 1;
	let count = 0;
	let max = 100;

	a.forEach((element) => {
		if (element > min) {
			min = element;
		}
	});

	b.forEach((element) => {
		if (element < max) {
			max = element;
		}
	});

	console.log(min);
	console.log(max);
}

getTotalX([2, 4], [16, 32, 96]);
