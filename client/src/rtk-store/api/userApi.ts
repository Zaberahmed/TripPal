import { apiSlice } from './apiSlice';

export const userApi = apiSlice.injectEndpoints({
	endpoints: (builder: any) => ({
		updateTravelInfo: builder.mutation({
			query: (data: any) => ({
				url: '/user/travelInfo',
				method: 'PUT',
				headers: {
					'content-type': 'Application/json',
				},
				body: data,
				credentials: 'include',
			}),
		}),
	}),
});

export const { useUpdateTravelInfoMutation } = userApi;
