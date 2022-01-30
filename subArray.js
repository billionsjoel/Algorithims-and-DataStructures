function birthday(s, d, m) {
	// Write your code here
	console.log(s.slice(0, m));
	console.log(s.splice(m, m));
	console.log(s.splice(m, m));
}

birthday([1, 2, 1, 3, 2], 3, 2);
