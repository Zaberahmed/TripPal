import { Request, Response } from 'express';
import bcrypt from 'bcrypt';
import { createUser, findAllUsers, findAndUpdateUser, findUserByEmail, findUserById } from '../models/user/user.query';
import { getSession, createSession, destroySession } from './../middlewares/sessionManagement';
import { Session } from '../interfaces/session.interface';
import { Types } from '../database';

export const signUp = async (req: Request, res: Response) => {
	try {
		const { name, email, password, phone } = req.body;
		if (await findUserByEmail(email)) return res.status(401).send('Email already exists!');

		const saltRounds = 10;
		const hashedPassword = await bcrypt.hash(password, saltRounds);

		const newUser = await createUser({ name, email, password: hashedPassword, phone });

		const token = createSession(email);
		res.cookie('accessToken', token, {
			httpOnly: false,
			secure: false,
			sameSite: 'strict',
		});

		res.status(201).send(newUser);
	} catch (error) {
		console.error('Error while signing up an user at controller!');
		res.status(500).json({
			error: true,
			message: 'Error while signing up an user!',
		});
	}
};
export const signIn = async (req: Request, res: Response) => {
	try {
		const { email, password } = req.body;

		const user = await findUserByEmail(email);
		if (!user) return res.status(401).send('User does not exist!');

		const isCredentialOk = await bcrypt.compare(password, user.password);
		if (!isCredentialOk) return res.status(401).send('Invalid password!');

		const token = createSession(email);
		res.cookie('accessToken', token, {
			httpOnly: false,
			secure: false,
			sameSite: 'strict',
		});

		res.status(200).send(user);
	} catch (error) {
		console.error('Error while signing in at controller!');
		res.status(500).json({
			error: true,
			message: 'Error while signing in!',
		});
	}
};

export const getAllUsers = async (req: Request, res: Response) => {
	try {
		const users = await findAllUsers();
		res.status(200).send(users);
	} catch (error) {
		console.error('Error while getting all users at controller!');
		res.status(500).json({
			error: true,
			message: 'Error while getting all users!',
		});
	}
};
export const getUserById = async (req: Request, res: Response) => {
	try {
		const userId = req.params.id;
		const user = await findUserById(new Types.ObjectId(userId));
		res.status(200).send(user);
	} catch (error) {
		console.error('Error while getting user at controller!');
		res.status(500).json({
			error: true,
			message: 'Error while getting user!',
		});
	}
};

export const profile = async (req: Request, res: Response) => {
	try {
		const token = req.cookies.accessToken;
		const session: Session | undefined = getSession(token);

		if (session) {
			const user = await findUserByEmail(session.userEmail);
			return res.status(200).send(user);
		}

		res.status(401).send('Session is invalid!');
	} catch (error) {
		console.error('Error while getting profile at controller!');
		res.status(500).json({
			error: true,
			message: 'Error while getting profile!',
		});
	}
};

export const updateProfile = async (req: Request, res: Response) => {
	try {
		const { nationality, passportId, gender } = req.body;
		const updateInfo = { nationality, passportId, gender };

		const token = req.cookies.accessToken;
		const session: Session | undefined = getSession(token);

		if (session) {
			const updateUser = await findAndUpdateUser(session.userEmail, updateInfo);
			return res.status(200).send(updateUser);
		}

		res.status(401).send('Session is invalid!');
	} catch (error) {
		console.error('Error while updating profile at controller!');
		res.status(500).json({
			error: true,
			message: 'Error while updating profile!',
		});
	}
};

export const signOut = async (req: Request, res: Response) => {
	try {
		const token = req.cookies.accessToken;
		if (!destroySession(token)) {
			return res.status(400).send('No session to logout!');
		}

		res.status(200).send('Successfully logged out!');
	} catch (error) {
		console.error('Error while logging out at controller!');
		res.status(500).json({
			error: true,
			message: 'Error while logging out!',
		});
	}
};
