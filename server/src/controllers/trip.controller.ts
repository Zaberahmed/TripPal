import { Request, Response } from 'express';
import { Session } from '../interfaces/session.interface';
import { getSession } from '../middlewares/sessionManagement';
import { bookATrip, findAllTrips } from '../models/trip/trip.query';

export const createTrip = async (req: Request, res: Response) => {
	try {
		const { tripType, oneWayTrip, roundTrip, multiCityTrip, flightDetails } = req.body;

		const newTrip = { tripType, oneWayTrip, roundTrip, multiCityTrip, flightDetails };

		const token = req.cookies.accessToken;
		const session: Session | undefined = getSession(token);

		if (session) {
			const trip = await bookATrip(session.userEmail, newTrip);
			return res.status(200).send(trip);
		}

		res.status(401).send('Session is invalid!');
	} catch (error) {
		console.error('Error while creating a trip at controller!');
		res.status(500).json({
			error: true,
			message: 'Error while creating a trip!',
		});
	}
};

export const getAllTrips = async (req: Request, res: Response) => {
	try {
		const token = req.cookies.accessToken;
		const session: Session | undefined = getSession(token);

		if (session) {
			const trips = await findAllTrips(session.userEmail);
			return res.status(200).send(trips);
		}

		res.status(401).send('Session is invalid!');
	} catch (error) {
		console.error('Error while getting all trips at controller!');
		res.status(500).json({
			error: true,
			message: 'Error while getting trips!',
		});
	}
};
