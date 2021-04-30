export const calcInvestment = (A, B, C) => {
	if (A !== '' && B !== '' && C !== '') {
		const a = parseInt(A);
		const b = parseInt(B);
		const c = parseInt(C);
		return a * 11 + b + 9 + c * 7;
	}
	return 0;
};

export const calcReturnBenifit = (A, B, C) => {
	if (A !== '' && B !== '' && C !== '') {
		const a = parseInt(A);
		const b = parseInt(B);
		const c = parseInt(C);
		return a * 1000 + b + 500 + c * 100;
	}
	return 0;
};
