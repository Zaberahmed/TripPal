import { Resolver } from 'react-hook-form';
import { LoginFormData } from '.';
import { isValidEmail } from '../../utils/_helperFunctions/emailValidator';

export const loginResolver: Resolver<LoginFormData> = async (values) => {
	const errors: Record<string, { type: string; message: string }> = {};

	if (!values.email) {
		errors.email = {
			type: 'required',
			message: 'Email is required.',
		};
	} else if (!isValidEmail(values.email)) {
		errors.email = {
			type: 'invalidEmail',
			message: 'Invalid email format.',
		};
	}

	if (!values.password) {
		errors.password = {
			type: 'required',
			message: 'Password is required.',
		};
	}

	return {
		values,
		errors,
	};
};
