function getTotalX(a, b) {
	// Write your code here
	let doubleIndex = 0;
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

	for (let i = min; i <= max; i++) {
		let result = true;

		for (let doubleIndex = 0; doubleIndex < a.length; doubleIndex++) {
			if (i % a[doubleIndex] !== 0) {
				result = false;
				break;
			}
		}

		if (result) {
			for (let doubleIndex = 0; doubleIndex < b.length; doubleIndex++) {
				if (b[doubleIndex] % i !== 0) {
					result = false;
					break;
				}
			}
		}
		if (result) {
			count++;
		}
	}
	console.log(count);
}

getTotalX([2, 4], [16, 32, 96]);
