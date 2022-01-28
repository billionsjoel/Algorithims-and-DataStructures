function gradingStudents(grades) {
	// Write your code here
	//if grade is less than 40 === fail
	//if grade - grade5 < 3 grade === grade5
	let roundedArr = [];
	grades.forEach((element) => {
		//console.log(element % 5);

		//if (element < 38) {
		//	roundedArr.push(element);
		//}

		if (element % 5 === 3 && element >= 38) {
			roundedArr.push(element + 2);
		} else if (element % 5 === 4 && element >= 38) {
			roundedArr.push(element + 1);
		} else if (element % 5 < 3) {
			roundedArr.push(element);
		} else {
			roundedArr.push(element);
		}
	});

	console.log(roundedArr);
}

gradingStudents([73, 67, 38, 33]);
