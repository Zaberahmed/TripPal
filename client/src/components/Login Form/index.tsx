import { useForm } from 'react-hook-form';
import { FormErrorMessage, FormLabel, FormControl, Input, Button, Center, Icon, InputLeftElement, InputGroup } from '@chakra-ui/react';
import { MdEmail } from 'react-icons/md';
import { RiLockPasswordFill } from 'react-icons/ri';
import { loginResolver } from './validator';
import { useSignInMutation } from '../../rtk-store/api/authApi';

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

	async function onSubmit(values: LoginFormData) {
		try {
			const result = await signIn(values).unwrap();
			console.log('result:', result);
		} catch (error) {
			console.error('Error:', error);
		}
	}

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<FormControl>
				<FormLabel htmlFor="email">Email</FormLabel>
				<InputGroup>
					<InputLeftElement pointerEvents="none">
						<Icon
							as={MdEmail}
							color="gray.400"
						/>
					</InputLeftElement>
					<Input
						id="email"
						placeholder="example@example.com"
						{...register('email')}
					/>
				</InputGroup>
				{errors?.email && <FormErrorMessage>errors.email.message </FormErrorMessage>}
			</FormControl>

			<FormControl mt={'.5rem'}>
				<FormLabel htmlFor="password">Password</FormLabel>
				<InputGroup>
					<InputLeftElement pointerEvents={'none'}>
						<Icon
							as={RiLockPasswordFill}
							color="gray.400"
						/>
					</InputLeftElement>
					<Input
						id="password"
						placeholder="********"
						{...register('password')}
					/>
				</InputGroup>
				{errors?.password && <FormErrorMessage>{errors.password.message}</FormErrorMessage>}
			</FormControl>
			<Center>
				<Button
					w={'10rem'}
					mt={'4'}
					color={'primary'}
					bg={'action'}
					borderRadius={'.85rem'}
					isLoading={isLoading}
					type="submit">
					Login
				</Button>
			</Center>
		</form>
	);
};

export default LoginForm;
