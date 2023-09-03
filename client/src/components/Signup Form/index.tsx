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
import InputField from '../Input field';

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
		formState: { errors, isSubmitting },
	} = useForm<SignupFormData>({ resolver: signUpResolver });

	function onSubmit(values: SignupFormData): Promise<void> {
		return new Promise((resolve) => {
			setTimeout(() => {
				console.log(values);
				resolve();
			}, 1000);
		});
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
					isLoading={isSubmitting}
					type={'submit'}
				/>
			</Center>
			<OrDivider />
			<OauthButtons />
		</form>
	);
};

export default SignupForm;
