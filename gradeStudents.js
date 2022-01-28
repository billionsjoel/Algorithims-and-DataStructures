function gradingStudents(grades) {
	// Write your code here
	//if grade is less than 40 === fail
	//if grade - grade5 < 3 grade === grade5

	grades.forEach((element) => {
		if (element < 40) {
			return;
		}
		let rem = element / 10;
		console.log(10 - Math.ceil(rem));
	});

	//console.log(roundedArr);
}

gradingStudents([73, 67, 38, 33]);
