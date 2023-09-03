import { useForm } from 'react-hook-form';
import { FormErrorMessage, FormLabel, FormControl, Input, Button, Center, Icon, InputLeftElement, InputGroup } from '@chakra-ui/react';
import { MdEmail } from 'react-icons/md';
import { RiLockPasswordFill } from 'react-icons/ri';
import { loginResolver } from './validator';

export type LoginFormData = {
	email: string;
	password: string;
};

const LoginForm = () => {
	const {
		handleSubmit,
		register,
		formState: { errors, isSubmitting },
	} = useForm<LoginFormData>({ resolver: loginResolver });

	function onSubmit(values: LoginFormData): Promise<void> {
		return new Promise((resolve) => {
			// setTimeout(() => {
			// 	console.log(values);
			// 	resolve();
			// }, 2000);
			console.log(values);
			resolve();
		});
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
					isLoading={isSubmitting}
					type="submit">
					Login
				</Button>
			</Center>
		</form>
	);
};

export default LoginForm;
