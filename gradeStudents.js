function gradingStudents(grades) {
	let roundedArr = [];
	grades.forEach((element) => {
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

gradingStudents([73, 67, 38, 33, 39]);
