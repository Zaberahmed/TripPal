import { MultiCityFormData } from '../components/Multi City  Form';
import { OneWayFormData } from '../components/One way Form';
import { RoundTripFormData } from '../components/Round Trip Form';

export interface Trip {
	tripType: string;
	oneWayTrip?: OneWayFormData | null;
	roundTrip?: RoundTripFormData | null;
	multiCityTrip?: MultiCityFormData | null;
}
