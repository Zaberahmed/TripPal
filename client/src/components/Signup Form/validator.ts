import { Resolver } from 'react-hook-form';
import { isValidPhoneNumber } from '../../utils/helperFunctions/phoneNumberValidator';
import { isValidEmail } from '../../utils/helperFunctions/emailValidator';
import { SignupFormData } from '.';
import { isStrongAndValidPassword } from '../../utils/helperFunctions/passwordValidator';

export const signUpResolver: Resolver<SignupFormData> = async (values) => {
	const errors: Record<string, { type: string; message: string }> = {};

	if (!values.name) {
		errors.name = {
			type: 'required',
			message: 'Name is required.',
		};
	}

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
	} else if (!isStrongAndValidPassword(values.password)) {
		errors.password = {
			type: 'weakPassword',
			message: 'Password must be at least 8 characters long and contain at least one lowercase letter, one uppercase letter, one digit, and one special character.',
		};
	}

	if (!values.confirmPassword) {
		errors.confirmPassword = {
			type: 'required',
			message: 'Confirm password is required.',
		};
	} else if (values.confirmPassword !== values.password) {
		errors.confirmPassword = {
			type: 'passwordMismatch',
			message: 'Passwords do not match.',
		};
	}

	if (!values.phone) {
		errors.phone = {
			type: 'required',
			message: 'Contact Number is required.',
		};
	} else if (!isValidPhoneNumber(values.phone)) {
		errors.phone = {
			type: 'invalidPhone',
			message: 'Invalid phone number format.',
		};
	}

	return {
		values,
		errors,
	};
};
