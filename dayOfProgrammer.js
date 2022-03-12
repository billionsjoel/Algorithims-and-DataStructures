function dayOfProgrammer(year) {
	// check for which calender the year lies
	// check if it is a leap year
	// intialise number of days for each month till august.
	// Calculate the sum of days until the differece againt 256 is less than 30
	//return the date [the difference of 256 and the prev sum]
	// month is [the counter for the previous month summations + 1]
	// the year is already given
	let Calender = '';
	let leapYear = false;
	let programmerDate = '';
	const monthDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
	let sum = 0;
	let i = 0;

	if (year < 1918 && year >= 1700) {
		if (year % 4 === 0) {
			leapYear = true;
		}
	} else if (year === 1918) {
		Calender = 'transition';
	} else {
		if (year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0)) {
			leapYear = true;
		}
	}
	while (256 - sum > 30) {
		if (i === 1) {
			if (Calender === 'transition') {
				sum += monthDays[i] - 13;
			} else {cd 
				if (leapYear) sum += monthDays[i] + 1;
				else sum += monthDays[i];
			}
		} else sum += monthDays[i];

		i++;
	}

	sum - 256 === 0
		? (programmerDate = `${monthDays[i - 1]}.0${i}.${year}`)
		: (programmerDate = `${256 - sum}.0${i + 1}.${year}`);

	//return the year in the form dd.mm.yyyy
	console.log(programmerDate);
}
dayOfProgrammer(2017);
dayOfProgrammer(2016);
dayOfProgrammer(1800);
dayOfProgrammer(1801);
dayOfProgrammer(1918);
