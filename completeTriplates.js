function compareTriplets(a, b) {
	// Write your code here
	//a[(5, 6, 7)];
	//b[(3, 6, 10)];


	//forloop to store my indicies

	for (let i = 0; i <= 2; i++) {
		//compare value at a[index] === b[index]
		if (a[i] > b[i]) {
			//award a point and increament by 1 for a greator side
			pointA += 1;
		} else if (a[i] < b[i]) {
			pointB += 1;
		} else {
			pointA += 0;
		}
	}
	console.log(pointA);
	console.log(pointB);
	console.log(`${pointA}, ${pointB}`);
	//console.log(finArr.push(pointA));

	//return arr with total points for each input arr[pointsA , pointsB]
}

compareTriplets([17, 28, 30], [99, 16, 8]);
