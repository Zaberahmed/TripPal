import { Schema, Types, model } from './../../database';
import { Trip } from '../../interfaces/trip.interface';

const oneWayTripSchema = new Schema({
	source: { type: String, required: true },
	sourceCity: { type: String, required: true },
	destination: { type: String, required: true },
	destinationCity: { type: String, required: true },
	departureDate: { type: String, required: true },
	passenger: { type: Number, required: true },
	cabin: { type: String, required: true },
});

const roundTripSchema = new Schema({
	source: { type: String, required: true },
	sourceCity: { type: String, required: true },
	destination: { type: String, required: true },
	destinationCity: { type: String, required: true },
	departureDate: { type: String, required: true },
	returnDate: { type: String, required: true },
	passenger: { type: Number, required: true },
	cabin: { type: String, required: true },
});

const multiCityTripSchema = new Schema({
	cities: [
		{
			source: { type: String, required: true },
			sourceCity: { type: String, required: true },
			destination: { type: String, required: true },
			destinationCity: { type: String, required: true },
			departureDate: { type: String, required: true },
		},
	],
	passenger: { type: Number, required: true },
	cabin: { type: String, required: true },
});

const flightDetailsSchema = new Schema({
	originStationCode: { type: String, required: true },
	destinationStationCode: { type: String, required: true },
	departureDateTime: { type: String, required: true },
	arrivalDateTime: { type: String, required: true },
	classOfService: { type: String, required: true },
	flightNumber: { type: Number, required: true },
	numStops: { type: Number, required: true },
	distanceInKM: { type: Number, required: true },
	logoUrl: { type: String, required: true },
	displayName: { type: String, required: true },
	currency: { type: String, required: true },
	totalPrice: { type: Number, required: true },
});

const tripSchema = new Schema({
	tripType: { type: String, required: true },
	oneWayTrip: { type: oneWayTripSchema, required: false },
	roundTrip: { type: roundTripSchema, required: false },
	multiCityTrip: { type: multiCityTripSchema, required: false },
	flightDetails: [{ type: flightDetailsSchema, required: true }],
});

export const TripModel = model<Trip>('Trip', tripSchema);
