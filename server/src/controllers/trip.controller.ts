import { Request, Response } from 'express';
import { Session } from '../interfaces/session.interface';
import { getSession } from '../middlewares/sessionManagement';
import { bookATrip } from '../models/trip/trip.query';

export const createTrip = async (req: Request, res: Response) => {
	try {
		const { tripType, oneWayTrip, roundTrip, multiCityTrip, flightDetails } = req.body;

		const newTrip = { tripType, oneWayTrip, roundTrip, multiCityTrip, flightDetails };

		const token = req.cookies.accessToken;
		const session: Session | undefined = getSession(token);

		if (session) {
			const trip = await bookATrip(session.userEmail, newTrip);
			res.status(200).send(trip);
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
