export function isValidPhoneNumber(phone: string): boolean {
	if (/^01\d{9}$/.test(phone)) {
		const thirdDigit = phone.charAt(2);
		if (['5', '6', '7', '8', '9'].includes(thirdDigit)) {
			return true;
		}
	}
	return false;
}
