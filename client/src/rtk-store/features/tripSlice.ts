import { createSlice } from '@reduxjs/toolkit';
import { Trip } from '../../interfaces/trip.interface';

const initialTripState: Trip = {
	tripType: '',
	oneWayTrip: null,
	roundTrip: null,
	multiCityTrip: null,
};

const tripSlice = createSlice({
	name: 'trip',
	initialState: initialTripState,
	reducers: {
		setTrip: (state, action) => {
			return { ...state, ...action.payload };
		},
		clearTrip: () => {
			return initialTripState;
		},
	},
});

export const { setTrip, clearTrip } = tripSlice.actions;
export default tripSlice.reducer;
