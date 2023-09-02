import { UserModel } from './user.model';

export const findAllUsers = async () => {
	try {
		return await UserModel.find({});
	} catch (error) {
		console.error('Error getting all users in query!');
	}
};
