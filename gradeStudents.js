function gradingStudents(grades) {
	// Write your code here
	//if grade is less than 40 === fail
	//if grade - grade5 < 3 grade === grade5
	let roundedArr = [];
	grades.forEach((element) => {
		if (element < 40) {
			return;
		}
		//console.log(element % 5);

		if (element % 5 === 3) {
			roundedArr.push(element + 2);
		}
		if (element % 5 === 4) {
			roundedArr.push(element + 1);
		}

		if (element % 5 < 3) {
			roundedArr.push(element);
		}
	});

	console.log(roundedArr);
}

gradingStudents([71, 72, 73, 74, 75, 76, 77, 78, 79]);
