import { Resolver, useForm } from 'react-hook-form';
import { FormErrorMessage, FormLabel, FormControl, Input, Button, Center } from '@chakra-ui/react';

type LoginFormData = {
	email: string;
	password: string;
};

const resolver: Resolver<LoginFormData> = async (values) => {
	const errors: Record<string, { type: string; message: string }> = {};

	if (!values.email) {
		errors.email = {
			type: 'required',
			message: 'Email is required.',
		};
	} else if (!isValidEmail(values.email)) {
		errors.email = {
			type: 'invalidEmail',
			message: 'Invalid email format.',
		};
	}

	if (!values.password) {
		errors.password = {
			type: 'required',
			message: 'Password is required.',
		};
	}

	return {
		values,
		errors,
	};
};

function isValidEmail(email: string): boolean {
	return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

const LoginForm = () => {
	const {
		handleSubmit,
		register,
		formState: { errors, isSubmitting },
	} = useForm<LoginFormData>({ resolver });

	function onSubmit(values: LoginFormData): Promise<void> {
		return new Promise((resolve) => {
			setTimeout(() => {
				console.log(values);
				resolve();
			}, 2000);
		});
	}

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<FormControl>
				<FormLabel htmlFor="name">Email</FormLabel>
				<Input
					id="email"
					placeholder="Email"
					{...register('email')}
				/>
				{errors?.email && <FormErrorMessage>errors.email.message </FormErrorMessage>}
			</FormControl>

			<FormControl mt={'.5rem'}>
				<FormLabel htmlFor="password">Password</FormLabel>
				<Input
					id="password"
					placeholder="Password"
					{...register('password')}
				/>
				{errors?.password && <FormErrorMessage>{errors.password.message}</FormErrorMessage>}
			</FormControl>
			<Center>
				<Button
					w={'10rem'}
					mt={'4'}
					color={'primary'}
					bg={'action'}
					borderRadius={'.85rem'}
					isLoading={isSubmitting}
					type="submit">
					Login
				</Button>
			</Center>
		</form>
	);
};

export default LoginForm;
