export interface User {
	_id?: string;
	name: string;
	email: string;
	password: string;
	phone: string;
	gender?: string;
	nationality?: string;
	date_of_birth?: Date;
	passportId?: string;
}
