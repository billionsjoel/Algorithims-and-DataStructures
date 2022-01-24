function timeConversion(s) {
	// Write your code here
	let S = '';
	// convert time into arr
	const time = s.split(':');
	const newTime = [];
	// check last array value for am or pm
	const lastEl = time[time.length - 1];
	const checkLastEl = lastEl.split('');

	// if pm leave time as it is else reset time with a switch case to start from 00;

	if (checkLastEl.includes('P')) {
		//console.log(s);
	} else {
		// reset the hours
		time.unshift('13');
		time.splice(1, 1);
		console.log(time);
	}
}

//return new string;

//console.log(newTime);

timeConversion('07:05:45AM');
