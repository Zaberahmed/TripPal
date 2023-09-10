import { Trip } from '../../interfaces/trip.interface';
import { findUserByEmail } from '../user/user.query';
import { TripModel } from './trip.model';

export const bookATrip = async (email: string, trip: Trip) => {
	try {
		const createdTrip = await TripModel.create(trip);
		const user = await findUserByEmail(email);
		if (user) {
			user.trips?.push(createdTrip);
			await user.save();
		} else {
			console.error('User not found!');
		}
		return createdTrip;
	} catch (error) {
		console.error('Error while booking a trip in query!');
	}
};
