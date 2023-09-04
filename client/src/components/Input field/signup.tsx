import { FieldErrors, UseFormRegister } from 'react-hook-form';
import { FormControl, FormErrorMessage, FormLabel, Icon, Input, InputGroup, InputLeftElement } from '@chakra-ui/react';
import { SignupFormData } from '../Signup Form';
import { IconType } from 'react-icons';

type SignUpInputFieldProps = {
	register: UseFormRegister<SignupFormData>;
	errors: FieldErrors<SignupFormData>;
	id: keyof SignupFormData;
	placeholder: string;
	type: 'text' | 'tel' | 'textarea' | 'password' | 'email' | undefined;
	icon?: IconType;
	label: string;
};

const SignUpInputField = (props: SignUpInputFieldProps) => {
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
					// variant={'Flushed'}
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

export default SignUpInputField;
