import { FieldErrors, UseFormRegisterReturn } from 'react-hook-form';
import { FormControl, FormErrorMessage, FormLabel, Icon, Input, InputGroup, InputLeftElement } from '@chakra-ui/react';
import { SignupFormData } from '../Signup Form';
import { IconType } from 'react-icons';

type InputFieldProps = {
	register: (input: keyof SignupFormData) => UseFormRegisterReturn<keyof SignupFormData>;
	errors: FieldErrors<SignupFormData>;
	id: keyof SignupFormData;
	placeholder: string;
	type: 'text' | 'tel' | 'textarea' | 'password' | 'email' | undefined;
	icon?: IconType;
	label: string;
};

const InputField = (props: InputFieldProps) => {
	const { register, errors, id, placeholder, type, icon, label } = props;

	return (
		<FormControl m={'.5rem 0'}>
			<FormLabel
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

export default InputField;
