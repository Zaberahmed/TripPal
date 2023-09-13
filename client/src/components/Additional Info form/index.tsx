import { useForm, SubmitHandler, Controller, FieldValues } from 'react-hook-form';
import { Box, Radio, RadioGroup, Stack, Button, Text, FormControl, FormLabel, Input } from '@chakra-ui/react';
import Select from 'react-select';
import { nationalities } from '../../data/nationalities';
import { useUpdateTravelInfoMutation } from '../../rtk-store/api/userApi';

const calculateMinDate = () => {
	const today = new Date();
	const minDate = new Date(today.getFullYear() - 18, today.getMonth(), today.getDate());
	return minDate.toISOString().slice(0, 10);
};

const AdditionalInfoForm = () => {
	const { control, handleSubmit } = useForm();
	const [updateUserTravelInfo] = useUpdateTravelInfoMutation();

	const nationalityOptions = nationalities.map((nationality: string) => ({ label: nationality, value: nationality }));

	const onSubmit: SubmitHandler<FieldValues> = async (data) => {
		// console.log('data:', data);
		const updateInfo = { nationality: data.nationality.value, gender: data.gender, passportId: data.passportId };
		try {
			const result = await updateUserTravelInfo(updateInfo);
			console.log('result:', result);
			if (result.data && result.data.email.length > 0) {
				localStorage.setItem('user', JSON.stringify(result.data));
			}
		} catch (error) {
			console.error(error);
		}
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
				<FormControl isRequired>
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

				<FormControl isRequired>
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

				<FormControl isRequired>
					<FormLabel mt={'.5rem'}>Passport ID</FormLabel>
					<Controller
						name="passportId"
						control={control}
						defaultValue=""
						render={({ field }) => <Input {...field} />}
					/>
				</FormControl>

				<FormControl isRequired>
					<FormLabel mt={'.5rem'}>Date of Birth</FormLabel>
					<Controller
						name="dob"
						control={control}
						defaultValue=""
						render={({ field }) => (
							<Input
								type="date"
								min={calculateMinDate()}
								{...field}
							/>
						)}
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
