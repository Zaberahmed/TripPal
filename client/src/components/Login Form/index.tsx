import { useForm } from 'react-hook-form';
import { Center } from '@chakra-ui/react';
import { MdEmail } from 'react-icons/md';
import { RiLockPasswordFill } from 'react-icons/ri';
import { loginResolver } from './validator';
import { useSignInMutation } from '../../rtk-store/api/authApi';
import SubmitButton from '../Submit Button';
import LoginInputField from '../Input field/login';
import OrDivider from '../Or Divider';
import OauthButtons from '../Oauth Buttons';
import { useAppDispatch } from '../../rtk-store/hooks';
import { useNavigate } from 'react-router-dom';
import { insertUser } from '../../rtk-store/slices/userSlice';
import HeadingText from '../Heading';
import { User } from '../../interfaces/user.interface';

export type LoginFormData = {
	email: string;
	password: string;
};

const LoginForm = () => {
	const {
		handleSubmit,
		register,
		formState: { errors },
	} = useForm<LoginFormData>({ resolver: loginResolver });
	const [signIn, { isLoading, isError, error }] = useSignInMutation();
	const dispatch = useAppDispatch();
	const navigate = useNavigate();

	async function onSubmit(values: LoginFormData) {
		try {
			const result: User = await signIn(values).unwrap();
			if (result && result.email.length > 0) {
				dispatch(insertUser(result));
				navigate('/home');
			}
		} catch (error) {
			console.error('Error:', error);
		}
	}

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<Center>
				<HeadingText text={'Login'} />
			</Center>
			<LoginInputField
				register={register}
				errors={errors}
				id="email"
				placeholder="example@example.com"
				type="email"
				icon={MdEmail}
				label="Email"
			/>

			<LoginInputField
				register={register}
				errors={errors}
				id="password"
				placeholder="* * * * * * * * *"
				type="password"
				icon={RiLockPasswordFill}
				label="Password"
			/>

			<Center>
				<SubmitButton
					width={'10rem'}
					marginTop={'1.25rem'}
					bgColor={'actionPrimary'}
					color={'primary'}
					borderRadius={'.85rem'}
					isLoading={isLoading}
					type={'submit'}
					text={'Sign in'}
					maxWidth={'20rem'}
				/>
			</Center>
			<OrDivider />
			<OauthButtons />
		</form>
	);
};

export default LoginForm;
