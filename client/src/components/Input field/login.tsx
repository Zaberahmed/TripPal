import { FieldErrors, UseFormRegister } from 'react-hook-form';
import { FormControl, FormErrorMessage, FormLabel, Icon, Input, InputGroup, InputLeftElement } from '@chakra-ui/react';
import { IconType } from 'react-icons';
import { LoginFormData } from '../Login Form';

type LoginInputFieldProps = {
	register: UseFormRegister<LoginFormData>;
	errors: FieldErrors<LoginFormData>;
	id: keyof LoginFormData;
	placeholder: string;
	type: 'text' | 'tel' | 'textarea' | 'password' | 'email' | undefined;
	icon?: IconType;
	label: string;
};

const LoginInputField = (props: LoginInputFieldProps) => {
	const { register, errors, id, placeholder, type, icon, label } = props;

	return (
		<FormControl m={'.5rem 0'}>
			<FormLabel
				fontWeight={'600'}
				color={'ebony'}
				htmlFor={id}
				mb={0}>
				{label}
			</FormLabel>
			<InputGroup>
				{icon && (
					<InputLeftElement pointerEvents="none">
						<Icon
							as={icon}
							color="gray.400"
						/>
					</InputLeftElement>
				)}
				<Input
					id={id}
					placeholder={placeholder}
					type={type}
					{...register(id)}
				/>
			</InputGroup>
			{errors[id] && <FormErrorMessage>{errors[id]!.message}</FormErrorMessage>}
		</FormControl>
	);
};

export default LoginInputField;
