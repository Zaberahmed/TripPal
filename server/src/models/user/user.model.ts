import { Schema, Types, model } from './../../database';
import { User } from './../../interfaces/user.interface';

const userSchema = new Schema({
	name: { type: String, required: true },
	email: { type: String, required: true, unique: true },
	password: { type: String, required: false },
});

const UserModel = model<User>('User', userSchema);

export { UserModel };
