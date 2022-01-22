function miniMaxSum(arr) {
	// Write your code here
	let finArr = [];
	let sorted = arr.sort();
	function reduce(a, b) {
		return a + b;
	}
	let min = sorted.slice(0, 4).reduce(reduce, 0);
	console.log(min);
}

miniMaxSum([1, 2, 3, 4, 5]);
