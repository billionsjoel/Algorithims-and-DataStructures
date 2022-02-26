function dayOfProgrammer(year) {
	// check for which calender the year lies
	// check if it is a leap year
	// intialise number of days for each month till august.
	// Calculate the sum of days until the differece againt 256 is less than 30
	//return the date [the difference of 256 and the prev sum]
	// month is [the counter for the previous month summations + 1]
	// the year is already given
	let Calender = '';
	let monthDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
	if (year < 1918 && year >= 1700) {
		Calender = 'julian';
	} else if (year === 1918) {
		Calender = 'transition';
	} else {
		Calender = 'gregorian';
	}

	//return the year in the form dd.mm.yyyy
}
dayOfProgrammer(2017);
//dayOfProgrammer(2016);
//dayOfProgrammer(1800);
