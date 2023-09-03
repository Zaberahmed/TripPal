import { LoginFormData } from '../../components/Login Form';
import axiosInstance from '../axios';

export const signIn = async (signInData: LoginFormData) => {
	try {
		return await axiosInstance
			.post('/user/signin', signInData)
			.then((res) => res.data)
			.catch((error) => console.error('Error:', error));
	} catch (error) {
		console.error('Error:', error);
	}
};
