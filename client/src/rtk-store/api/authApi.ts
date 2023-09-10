import { LoginFormData } from '../../components/Login Form';
import { SignupFormData } from '../../components/Signup Form';
import { apiSlice } from './apiSlice';

export const authApi = apiSlice.injectEndpoints({
	endpoints: (builder: any) => ({
		signUp: builder.mutation({
			query: (data: SignupFormData) => ({
				url: '/user/signup',
				method: 'POST',
				headers: {
					'Content-type': 'application/json; charset=UTF-8',
				},
				body: data,
				credentials: 'include',
			}),
		}),

		signIn: builder.mutation({
			query: (data: LoginFormData) => ({
				url: '/user/signin',
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
				url: '/user/signout',
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
