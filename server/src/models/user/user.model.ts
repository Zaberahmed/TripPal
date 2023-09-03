import { Schema, Types, model } from './../../database';
import { User } from './../../interfaces/user.interface';

const userSchema = new Schema({
	name: { type: String, required: true },
	email: { type: String, required: true, unique: true },
	password: { type: String, required: false },
	phone: { type: String, required: false },
	gender: { type: String, required: false },
	nationality: { type: String, required: false },
	date_of_birth: { type: Date, required: false },
	passportId: { type: String, required: false },
});

const UserModel = model<User>('User', userSchema);

export { UserModel };
