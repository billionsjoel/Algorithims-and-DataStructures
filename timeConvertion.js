function timeConversion(s) {
	// Write your code here
	let S = '';
	// convert time into arr
	const time = s.split(':');
	const newTime = [];
	// check last array value for am or pm
	const lastEl = time[time.length - 1];
	//console.log(lastEl.split(','));
	const checkLastEl = lastEl.split('');
	const seconds = checkLastEl
		.splice(0, Math.ceil(checkLastEl.length / 2))
		.join('');

	// if pm leave time as it is else reset time with a switch case to start from 00;

	if (checkLastEl.includes('A') && time[0] < 12) {
		console.log(s);
	} else {
		// reset the hours
		if (time[0] === '07') {
			time.unshift('19');
			time.pop();
			time.push(seconds);
		}
		if (time[0] === '08') {
			time.unshift('20');
			time.pop();
			time.push(seconds);
		}
		if (time[0] === '09') {
			time.unshift('21');
			time.pop();
			time.push(seconds);
		}
		if (time[0] === '10') {
			time.unshift('22');
			time.pop();
			time.push(seconds);
		}
		if (time[0] === '11') {
			time.unshift('23');
			time.pop();
			time.push(seconds);
		}
		if (time[0] === '12' && checkLastEl.includes('A')) {
			time.unshift('00');
			time.pop();
			time.push(seconds);
		}

		time.splice(1, 1);
		console.log(time.join(':'));
	}
}

//return new string;

//console.log(newTime);

timeConversion('08:05:15PM');
