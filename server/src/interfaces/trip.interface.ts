import { Types } from '../database';

export interface Trip {
	_id?: Types.ObjectId;
	tripType: string;
	oneWayTrip?: OneWayFormData | null;
	roundTrip?: RoundTripFormData | null;
	multiCityTrip?: MultiCityFormData | null;
	flightDetails: FlightsDetails[];
}
export type OneWayFormData = {
	source: string;
	sourceCity: string;
	destination: string;
	destinationCity: string;
	departureDate: string;
	passenger: number;
	cabin: string;
};

export type RoundTripFormData = {
	source: string;
	sourceCity: string;
	destination: string;
	destinationCity: string;
	departureDate: string;
	returnDate: string;
	passenger: number;
	cabin: string;
};

export type MultiCityFormData = {
	cities: {
		source: string;
		sourceCity: string;
		destination: string;
		destinationCity: string;
		departureDate: string;
	}[];
	passenger: number;
	cabin: string;
};

export interface FlightsDetails {
	originStationCode: string;
	destinationStationCode: string;
	departureDateTime: string;
	arrivalDateTime: string;
	classOfService: string;
	flightNumber: number;
	numStops: number;
	distanceInKM: number;
	logoUrl: string;
	displayName: string;
	currency: string;
	totalPrice: number;
}
