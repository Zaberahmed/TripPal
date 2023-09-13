import { apiSlice } from './apiSlice';

export const tripApi = apiSlice.injectEndpoints({
	endpoints: (builder: any) => ({
		fetchAllTrips: builder.query({
			query: () => ({
				url: '/trip/get-all',
				method: 'GET',
				headers: {
					'content-type': 'application/json',
				},
				credentials: 'include',
			}),
		}),

		postTrip: builder.mutation({
			query: (data: any) => ({
				url: '/trip/create',
				method: 'POST',
				headers: { 'content-type': 'application/json' },
				body: data,
				credentials: 'include',
			}),
		}),
	}),
});
export const { useFetchAllTripsQuery, usePostTripMutation } = tripApi;
