function gradingStudents(grades) {
	// Write your code here
	//if grade is less than 40 === fail
	//if grade - grade5 < 3 grade === grade5

	grades.forEach((element) => {
		if (element < 40) {
			return;
		}
    if (element % 5 < 3)
    {
      // 10 - second element of array , if less than 3 add it to array element .
		}
	});

	console.log(roundedArr);
}

gradingStudents([73, 67, 38, 33]);
