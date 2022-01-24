function timeConversion(s) {
	// Write your code here
	let S = '';
	// convert time into arr
	const time = s.split(':');

	// check last array value for am or pm
	const lastEl = time[time.length - 1];
	const checkLastEl = lastEl.split('');

	// if pm leave time as it is else reset time with a switch case to start from 00;

	//return new string;

	console.log(checkLastEl);
}

timeConversion('07:05:45PM');
