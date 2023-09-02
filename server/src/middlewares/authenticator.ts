import { Request, Response, NextFunction } from 'express';
import { getSession } from './sessionManagement';

const authenticator = async (req: Request, res: Response, next: NextFunction) => {
	const token = req.cookies.accessToken;

	if (!token) {
		res.status(400).send('Token not found!');
		return;
	}

	const existingSession = getSession(token);
	if (!existingSession) {
		res.status(400).send('Session does not exist!');
		return;
	}

	next();
};

export { authenticator };
