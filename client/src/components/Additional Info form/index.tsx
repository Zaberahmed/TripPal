import { useForm, SubmitHandler, Controller, FieldValues } from 'react-hook-form';
import { Box, Input, Radio, RadioGroup, Stack, Button, Text } from '@chakra-ui/react';

const AdditionalInfoForm = () => {
	const { control, handleSubmit } = useForm();

	const onSubmit: SubmitHandler<FieldValues> = (data) => {
		console.log(data);
	};

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<Text
				textAlign={'center'}
				fontWeight={'600'}
				fontSize={'1rem'}
				mt={'1.25rem'}>
				Additional Information:
			</Text>
			<Box
				p={'.5rem'}
				color={'ebony'}
				fontWeight={'500'}>
				<label>Nationality</label>
				<Controller
					name="nationality"
					control={control}
					defaultValue=""
					render={({ field }) => (
						<Input
							{...field}
							mt={'.5rem'}
						/>
					)}
				/>

				<label>Gender</label>
				<Controller
					name="gender"
					control={control}
					defaultValue=""
					render={({ field }) => (
						<RadioGroup
							{...field}
							mt={'.5rem'}>
							<Stack direction="row">
								<Radio value="male">Male</Radio>
								<Radio value="female">Female</Radio>
								<Radio value="other">Other</Radio>
							</Stack>
						</RadioGroup>
					)}
				/>

				<label>Passport ID</label>
				<Controller
					name="passportId"
					control={control}
					defaultValue=""
					render={({ field }) => (
						<Input
							{...field}
							mt={'.5rem'}
						/>
					)}
				/>

				<Button
					type="submit"
					mt="4"
					colorScheme="blue">
					Done
				</Button>
			</Box>
		</form>
	);
};

export default AdditionalInfoForm;
