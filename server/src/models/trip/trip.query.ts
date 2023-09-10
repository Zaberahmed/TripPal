import { Trip } from '../../interfaces/trip.interface';
import { UserModel } from '../user/user.model';
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

export const findAllTrips = async (email: string) => {
	try {
		const trips = await UserModel.aggregate([
			{
				$match: { email: email },
			},
			{
				$lookup: {
					from: 'trips',
					localField: 'trips',
					foreignField: '_id',
					as: 'tripObjects',
				},
			},
			{
				$project: {
					tripObjects: 1,
				},
			},
		]);

		if (trips.length > 0) {
			return trips[0].tripObjects;
		}
	} catch (error) {
		console.error('Error while finding all trips in query!');
	}
};
