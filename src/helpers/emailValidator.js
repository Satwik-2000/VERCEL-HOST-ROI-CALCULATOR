import validator from 'email-validator';

export const emailHasError = (email) => {
	if (validator.validate(email)) {
		const domain = email.split('@')[1].split('.')[0].toLowerCase();
		if (domain === 'gmail' || domain === 'yahoo' || domain === 'ymail') {
			return {
				status: false,
				msg: ' '
			};
		}
		return {
			status: true,
			msg: 'Only Gmail & Yahoo mail addresses accepted'
		};
	}
	return {
		status: true,
		msg: 'Email is not valid'
	};
};
