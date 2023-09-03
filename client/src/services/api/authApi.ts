import { LoginFormData } from '../../components/Login Form';
import axiosInstance from '../axios';

export const signIn = async (signInData: LoginFormData) => {
	try {
		const response = await axiosInstance.post('/user/signin', signInData);
		if (response.status === 200) {
			return response.data;
		} else {
			console.error('Sign-in failed with status code:', response.status);
			throw new Error('Sign-in failed');
		}
	} catch (error) {
		console.error('Sign-in error:', error);
		throw new Error('Sign-in failed');
	}
};
