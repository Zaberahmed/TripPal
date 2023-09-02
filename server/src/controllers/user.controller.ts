import { Request, Response } from 'express';
import { findAllUsers } from '../models/user/user.query';

export const getUsers = async (req: Request, res: Response) => {
	try {
		const users = await findAllUsers();
		res.status(200).send(users);
	} catch (error) {
		console.error('Error getting all users in controller!');
	}
};
