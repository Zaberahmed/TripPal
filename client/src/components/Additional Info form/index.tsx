import { useForm, SubmitHandler, Controller, FieldValues } from 'react-hook-form';
import { Box, Input, Radio, RadioGroup, Stack, Button, Text, FormControl, FormLabel } from '@chakra-ui/react';
import Select from 'react-select';
import { nationalities } from '../../data/nationalities';

const AdditionalInfoForm = () => {
	const { control, handleSubmit } = useForm();

	const nationalityOptions = nationalities.map((nationality: string) => ({ label: nationality, value: nationality }));

	const onSubmit: SubmitHandler<FieldValues> = (data) => {
		console.log(data);
	};

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<Box
				p={'.5rem'}
				fontWeight={'500'}
				color={'ebony'}>
				<Text
					textAlign={'center'}
					fontWeight={'600'}
					fontSize={'1.25rem'}
					mt={'1.5rem'}>
					Additional Information
				</Text>
				<FormControl>
					<FormLabel mt={'1rem'}>Nationality</FormLabel>
					<Controller
						name="nationality"
						control={control}
						defaultValue=""
						render={({ field }) => (
							<Select
								{...field}
								options={nationalityOptions}
								isSearchable
								placeholder="Select nationality..."
							/>
						)}
					/>
				</FormControl>

				<FormControl>
					<FormLabel mt={'.5rem'}>Gender</FormLabel>
					<Controller
						name="gender"
						control={control}
						defaultValue=""
						render={({ field }) => (
							<RadioGroup {...field}>
								<Stack direction="row">
									<Radio value="male">Male</Radio>
									<Radio value="female">Female</Radio>
									<Radio value="other">Other</Radio>
								</Stack>
							</RadioGroup>
						)}
					/>
				</FormControl>

				<FormControl>
					<FormLabel mt={'.5rem'}>Passport ID</FormLabel>
					<Controller
						name="passportId"
						control={control}
						defaultValue=""
						render={({ field }) => <Input {...field} />}
					/>
				</FormControl>

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
