import { useForm } from 'react-hook-form';
import { FormErrorMessage, FormLabel, FormControl, Input, Button, Center, Icon, InputGroup, InputLeftElement, Divider, Flex, Text } from '@chakra-ui/react';
import { MdEmail } from 'react-icons/md';
import { RiLockPasswordFill } from 'react-icons/ri';
import { BiSolidUser } from 'react-icons/bi';
import { FaMobileAlt } from 'react-icons/fa';
import { BsFacebook, BsGoogle } from 'react-icons/bs';
import { signUpResolver } from './validator';

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
			}, 2000);
		});
	}

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<FormControl>
				<FormLabel htmlFor="name">Name</FormLabel>
				<InputGroup>
					<InputLeftElement pointerEvents="none">
						<Icon
							as={BiSolidUser}
							color="gray.400"
						/>
					</InputLeftElement>
					<Input
						id="name"
						placeholder="John Doe"
						type="text"
						{...register('name')}
					/>
				</InputGroup>
				{errors?.name && <FormErrorMessage>errors.name.message </FormErrorMessage>}
			</FormControl>

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
						type="email"
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
						placeholder="*********"
						type="password"
						{...register('password')}
					/>
				</InputGroup>
				{errors?.password && <FormErrorMessage>{errors.password.message}</FormErrorMessage>}
			</FormControl>
			<FormControl mt={'.5rem'}>
				<FormLabel htmlFor="confirmPassword">Confirm password</FormLabel>
				<InputGroup>
					<InputLeftElement pointerEvents={'none'}>
						<Icon
							as={RiLockPasswordFill}
							color="gray.400"
						/>
					</InputLeftElement>
					<Input
						id="confirmPassword"
						placeholder="*********"
						type="password"
						{...register('confirmPassword')}
					/>
				</InputGroup>
				{errors?.confirmPassword && <FormErrorMessage>{errors.confirmPassword.message}</FormErrorMessage>}
			</FormControl>

			<FormControl mt={'.5rem'}>
				<FormLabel htmlFor="phone">Contact Number</FormLabel>
				<InputGroup>
					<InputLeftElement pointerEvents="none">
						<Icon
							as={FaMobileAlt}
							color="gray.400"
						/>
					</InputLeftElement>
					<Input
						id="phone"
						placeholder="01XXX-XXXXXX"
						type="tel"
						{...register('phone')}
					/>
				</InputGroup>
				{errors?.phone && <FormErrorMessage>errors.phone.message </FormErrorMessage>}
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
					Register
				</Button>
			</Center>
			<Flex
				alignItems={'center'}
				gap={'1rem'}
				mt={'1rem'}>
				<Divider
					border={'1px solid gray.300'}
					my={'1rem'}
				/>
				<Text>OR</Text>
				<Divider
					border={'1px solid gray.300'}
					my={'1rem'}
				/>
			</Flex>
			<Flex
				gap={'1rem'}
				justifyContent={'center'}
				alignItems={'center'}>
				<Button w={'10rem'}>
					<Icon
						as={BsFacebook}
						mr={'.35rem'}
						mb={'.25rem'}
					/>
					<Text>Facebook</Text>
				</Button>
				<Button w={'10rem'}>
					<Icon
						as={BsGoogle}
						mr={'.35rem'}
						mb={'.25rem'}
					/>
					<Text> Google</Text>
				</Button>
			</Flex>
		</form>
	);
};

export default SignupForm;
