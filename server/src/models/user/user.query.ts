import { User } from '../../interfaces/user.interface';
import { UserModel } from './user.model';

export const createUser = async (user: User) => {
	try {
		return await UserModel.create(user);
	} catch (error) {
		console.error('Error getting all users in query!');
	}
};

export const findUserByEmail = async (email: string) => {
	try {
		return await UserModel.findOne({ email: email });
	} catch (error) {
		console.error('Error getting all users in query!');
	}
};

export const findAllUsers = async () => {
	try {
		return await UserModel.find({});
	} catch (error) {
		console.error('Error getting all users in query!');
	}
};
