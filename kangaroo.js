function kangaroo(x1, v1, x2, v2) {
	// Write your code here
	let smallJumps = x2 - x1;
	let velocities = v1 - v2;

	if (smallJumps % velocities === 0 && v1 > v2) {
		return 'YES';
	} else {
		return 'NO';
	}
}

kangaroo(0, 3, 4, 2);
