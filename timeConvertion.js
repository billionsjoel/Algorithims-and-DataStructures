function timeConversion(s) {
	// Write your code here

	/* I also realised that you can just
   * add 12 to any time that has PM on it
	 * and only catch edge cases e,g for 12
 	 */

	let S = '';
	// convert time into arr
	const time = s.split(':');
	// check last array value for am or pm
	const lastEl = time[time.length - 1];
	//console.log(lastEl.split(','));
	const checkLastEl = lastEl.split('');
	const seconds = checkLastEl
		.splice(0, Math.ceil(checkLastEl.length / 2))
		.join('');

	// if pm leave time as it is else reset time with a switch case to start from 00;

	if (checkLastEl.includes('A') && time[0] < 12) {
		time.pop();
		time.push(seconds);
		console.log(time.join(':'));
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
		if (time[0] === '12' && checkLastEl.includes('P')) {
			time.unshift('12');
			time.pop();
			time.push(seconds);
		}
		if (time[0] === '02') {
			time.unshift('14');
			time.pop();
			time.push(seconds);
		}
		if (time[0] === '04') {
			time.unshift('16');
			time.pop();
			time.push(seconds);
		}

		time.splice(1, 1);
		console.log(time.join(':'));
	}
}


timeConversion('02:34:50PM');
