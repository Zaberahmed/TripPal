import jwt from 'jsonwebtoken';
import * as dotenv from 'dotenv';
import { Session } from '../interfaces/session.interface';

dotenv.config({ path: __dirname + './../.env' });
const SECRET_KEY: string = process.env.SECRET_KEY || 'HELLO WORLD';
const blockedList: string[] = [];

const createSession = (userEmail: string) => {
	const expiry = new Date();
	expiry.setMonth(expiry.getMonth() + 1);

	const newSession: Session = {
		expiresAt: expiry.valueOf(),
		userEmail: userEmail,
	};

	return jwt.sign(newSession, SECRET_KEY);
};

const getSession = (token: string) => {
	try {
		if (blockedList.includes(token)) return undefined;

		const sessionData: Session | undefined = jwt.verify(token, SECRET_KEY) as unknown as Session;
		if (sessionData.expiresAt < Date.now()) {
			console.log('Token has expired.');
			return undefined;
		}

		return sessionData;
	} catch (error) {
		console.error('Error verifying token:', error);
		return undefined;
	}
};

const destroySession = (token: string): boolean => {
	blockedList.push(token);
	return true;
};

export { createSession, getSession, destroySession };
