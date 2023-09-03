import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseUrl = `${import.meta.env.VITE_BACKEND_URL}:${import.meta.env.VITE_BACKEND_PORT}/user`;

export const authApi = createApi({
	baseQuery: fetchBaseQuery({ baseUrl }),
	endpoints: (builder) => ({
		signUp: builder.mutation({
			query: (credentials) => ({
				url: '/signup',
				method: 'POST',
				headers: {
					'Content-type': 'application/json; charset=UTF-8',
				},
				body: credentials,
				credentials: 'include',
			}),
		}),

		signIn: builder.mutation({
			query: (credentials) => ({
				url: '/signin',
				method: 'POST',
				headers: {
					'Content-type': 'application/json; charset=UTF-8',
				},
				body: credentials,
				credentials: 'include',
			}),
		}),
	}),
});

export const { useSignUpMutation, useSignInMutation } = authApi;
