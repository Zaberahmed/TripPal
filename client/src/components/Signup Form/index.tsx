import { useForm } from 'react-hook-form';
import { Center } from '@chakra-ui/react';
import { MdEmail } from 'react-icons/md';
import { RiLockPasswordFill } from 'react-icons/ri';
import { BiSolidUser } from 'react-icons/bi';
import { FaMobileAlt } from 'react-icons/fa';
import { signUpResolver } from './validator';
import OauthButtons from '../Oauth Buttons';
import OrDivider from '../Or Divider';
import SubmitButton from '../Submit Button';
import InputField from '../Input field/signup';
import { useSignUpMutation } from '../../rtk-store/api/authApi';

export type SignupFormData = {
	name: string;
	email: string;
	password: string;
	confirmPassword: string;
	phone: string;
};

const SignupForm = () => {
	const {
		handleSubmit,
		register,
		formState: { errors },
	} = useForm<SignupFormData>({ resolver: signUpResolver });

	const [signUp, { isLoading, isError, error }] = useSignUpMutation();

	async function onSubmit(values: SignupFormData) {
		try {
			const { name, email, password, phone } = values;
			const newUser = { name, email, password, phone };
			const result = await signUp(newUser).unwrap();
		} catch (error) {
			console.error('Error:', error);
		}
	}

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<InputField
				register={register}
				errors={errors}
				id="name"
				placeholder="John Doe"
				type="text"
				icon={BiSolidUser}
				label="Name"
			/>

			<InputField
				register={register}
				errors={errors}
				id="email"
				placeholder="example@example.com"
				type="email"
				icon={MdEmail}
				label="Email"
			/>

			<InputField
				register={register}
				errors={errors}
				id="password"
				placeholder="* * * * * * * * *"
				type="password"
				icon={RiLockPasswordFill}
				label="Password"
			/>

			<InputField
				register={register}
				errors={errors}
				id="confirmPassword"
				placeholder="* * * * * * * * *"
				type="password"
				icon={RiLockPasswordFill}
				label="Confirm Password"
			/>

			<InputField
				register={register}
				errors={errors}
				id="phone"
				placeholder="01XXX-XXXXXX"
				type="tel"
				icon={FaMobileAlt}
				label="Contact Number"
			/>

			<Center>
				<SubmitButton
					width={'10rem'}
					marginTop={'1.25rem'}
					bgColor={'action'}
					color={'primary'}
					borderRadius={'.85rem'}
					isLoading={isLoading}
					type={'submit'}
					text={'Sign up'}
				/>
			</Center>
			<OrDivider />
			<OauthButtons />
		</form>
	);
};

export default SignupForm;
