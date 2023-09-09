export function isStrongAndValidPassword(password: string): boolean {
	if (password.length < 8) {
		return false;
	}

	const regex = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W)/;
	return regex.test(password);
}
