import { Types } from '../../database';
import { User } from '../../interfaces/user.interface';
import { UserModel } from './user.model';

export const createUser = async (user: User) => {
	try {
		return await UserModel.create(user);
	} catch (error) {
		console.error('Error while creating in query!');
	}
};

export const findUserByEmail = async (email: string) => {
	try {
		return await UserModel.findOne({ email: email });
	} catch (error) {
		console.error('Error while getting all users in query!');
	}
};
export const findUserById = async (id: Types.ObjectId) => {
	try {
		return await UserModel.findOne({ _id: id });
	} catch (error) {
		console.error('Error while getting user in query!');
	}
};

export const findAllUsers = async () => {
	try {
		return await UserModel.find({});
	} catch (error) {
		console.error('Error while getting all users in query!');
	}
};

export const findAndUpdateUser = async (email: string, updateInfo: { nationality: string; gender: string; passportId: string }) => {
	try {
		return await UserModel.findOneAndUpdate({ email: email }, { $set: updateInfo }, { new: true });
	} catch (error) {
		console.error('Error while updating all users in query!');
	}
};
