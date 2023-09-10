import { apiSlice } from './apiSlice';

export const tripApi = apiSlice.injectEndpoints({
	endpoints: (builder: any) => ({
		fetchAllTrips: builder.query({
			query: () => ({
				url: '/trip/get-all',
				method: 'GET',
				headers: {
					'content-type': 'Application/json',
				},
				credentials: 'include',
			}),
		}),
		// //Manage Session Get Provider
		// manageSessionGetProvider: builder.query({
		//   query: (token) => ({
		//     url: `admin/ac/manage/session/get/provider`,
		//     method: "POST",
		//     headers: {
		//       "content-type": "Application/json",
		//       Authorization: token,
		//     },
		//   }),
		// }),
		// //Manage Session Get Session List
		// getManageSessionList: builder.query({
		//   query: ({ token, payload, page }) => ({
		//     url: `admin/ac/manage/session/get/appointments?page=${page}`,
		//     method: "POST",
		//     headers: {
		//       "content-type": "Application/json",
		//       Authorization: token,
		//     },
		//     body: JSON.stringify(payload),
		//   }),
		//   refetchOnMountOrArgChange: true,
		//   // providesTags: ["ManageSession"],
		// }),
		// //Manage Session Status Change
		// //Manage Session Get Session List
		// manageSessionStatusChange: builder.mutation({
		//   query: ({ token, payload }) => ({
		//     url: `admin/ac/manage/session/appointment/status/action`,
		//     method: "POST",
		//     headers: {
		//       "content-type": "Application/json",
		//       Authorization: token,
		//     },
		//     body: JSON.stringify(payload),
		//   }),
		//   // invalidatesTags: ["ManageSession"],
		// }),
	}),
});
export const { useFetchAllTripsQuery } = tripApi;
