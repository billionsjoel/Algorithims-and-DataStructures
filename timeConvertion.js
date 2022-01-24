function timeConversion(s) {
	// Write your code here
	let S = '';
	// convert time into arr
	const time = s.split(':');

	// check last array value for am or pm
	const lastEl = time[time.length - 1];

	// if pm leave time as it is else reset time with a switch case to start from 00;

	//return new string;

	console.log(lastEl);
}

timeConversion('07:05:45PM');
