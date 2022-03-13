function pageCount(n, p) {
	 let countFromStart, countFromEnd;

		if (p === n || p === 1) return 0;

		p = p % 2 === 0 ? p : p - 1;
		n = n % 2 === 0 ? n : n - 1;
		countFromStart = p / 2;
		countFromEnd = (n - p) / 2;


}

pageCount(6, 2);
