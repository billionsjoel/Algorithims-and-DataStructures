function compareTriplets(a, b) {
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
	//return arr with total points for each input arr[pointsA , pointsB]
	return [pointA, pointB];
}

compareTriplets([17, 28, 30], [99, 16, 8]);
