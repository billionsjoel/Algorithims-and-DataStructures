function kangaroo(x1, v1, x2, v2) {
	// Write your code here
	let distances = x2 - x1;
	let velocities = v2 - v1;

	if (distances % velocities === 0) {
		console.log('Yes');
	} else {
		console.log('NO');
	}
}

kangaroo(0, 3, 4, 2);
