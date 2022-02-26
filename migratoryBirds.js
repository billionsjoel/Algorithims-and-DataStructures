function migratoryBirds(arr) {
	// Write your code here
	// get the array of birds
	let birdTypes = [0, 0, 0, 0, 0];
	let indexMax = 0;

	// iterate through the given array
	arr.forEach((el) => {
		birdTypes[el - 1] += 1;
	});
	// for each number(id) count the count
	// check the number with highest count
	birdTypes.forEach((el, i) => {
		if (el > birdTypes[indexMax]) {
			indexMax = i;
		}
	});
	//check the lowest highest count and return that.
	console.log(indexMax + 1);
}
//migratoryBirds([1, 4, 4, 4, 5, 3]);
migratoryBirds([1, 2, 3, 4, 5, 4, 3, 2, 1, 3, 4]);
