import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseUrl = `${import.meta.env.VITE_BACKEND_URL}:${import.meta.env.VITE_BACKEND_PORT}/user`;

export const authApi = createApi({
	baseQuery: fetchBaseQuery({ baseUrl }),
	endpoints: (builder) => ({
		signUp: builder.mutation({
			query: (data) => ({
				url: '/signup',
				method: 'POST',
				headers: {
					'Content-type': 'application/json; charset=UTF-8',
				},
				body: data,
				credentials: 'include',
			}),
		}),

		signIn: builder.mutation({
			query: (data) => ({
				url: '/signin',
				method: 'POST',
				headers: {
					'Content-type': 'application/json; charset=UTF-8',
				},
				body: data,
				credentials: 'include',
			}),
		}),
		signOut: builder.mutation({
			query: () => ({
				url: '/signout',
				method: 'DELETE',
				headers: {
					'Content-type': 'application/json; charset=UTF-8',
				},
				credentials: 'include',
			}),
		}),
	}),
});

export const { useSignUpMutation, useSignInMutation, useSignOutMutation } = authApi;
