import { Box, Center, Flex, FormControl, FormLabel, Button, Input, Select, Text, IconButton } from '@chakra-ui/react';
import { useForm, SubmitHandler, Controller, useFieldArray, useWatch } from 'react-hook-form';
import SubmitButton from '../Submit Button';
import { AddIcon, MinusIcon } from '@chakra-ui/icons';
import { useEffect, useState } from 'react';

export type MultiCityFormData = {
	cities: {
		source: string;
		destination: string;
		departureDate: string;
	}[];
	passenger: number;
	cabin: string;
};

const MultiCityForm = () => {
	const [passengerCount, setPassengerCount] = useState<number>(1);

	const {
		handleSubmit,
		control,
		register,
		formState: { errors },
		setValue,
		getValues,
	} = useForm<MultiCityFormData>({
		defaultValues: {
			cities: [
				{
					source: 'Dhaka',
					destination: "Cox's Bazar",
					departureDate: new Date().toISOString().slice(0, 10),
				},
			],
			passenger: 1,
			cabin: 'economy',
		},
	});

	const { fields, append, remove } = useFieldArray({
		control,
		name: 'cities',
	});

	const onSubmit: SubmitHandler<MultiCityFormData> = (data) => {
		console.log(data);
	};

	const handleIncrementPassenger = () => {
		const currentPassengerCount = getValues('passenger');
		if (currentPassengerCount < 5) {
			setValue('passenger', currentPassengerCount + 1);
			setPassengerCount(currentPassengerCount + 1);
		}
	};

	const handleDecrementPassenger = () => {
		const currentPassengerCount = getValues('passenger');
		if (currentPassengerCount > 1) {
			setValue('passenger', currentPassengerCount - 1);
			setPassengerCount(currentPassengerCount - 1);
		}
	};

	const destinations = useWatch({
		control,
		name: 'cities',
		defaultValue: [],
	});

	useEffect(() => {
		if (fields.length > 1) {
			const previousCity = destinations[fields.length - 2];
			if (previousCity && previousCity.destination) {
				setValue(`cities.${fields.length - 1}.source`, previousCity.destination);
			}
		}
	}, [fields]);

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<Box>
				{fields.map((field, index) => (
					<Box key={field.id}>
						<FormControl
							isRequired
							mt={'1rem'}>
							<FormLabel>Flying from</FormLabel>
							<Controller
								name={`cities.${index}.source`}
								control={control}
								render={({ field }) => (
									<Input
										{...field}
										placeholder="Dhaka"
										type="text"
									/>
								)}
							/>
						</FormControl>

						<FormControl
							mt="4"
							isRequired>
							<FormLabel>Flying to</FormLabel>
							<Controller
								name={`cities.${index}.destination`}
								control={control}
								render={({ field }) => (
									<Input
										type="text"
										{...field}
										placeholder="Cox's Bazar"
									/>
								)}
							/>
						</FormControl>

						<FormControl
							mt="4"
							isRequired>
							<FormLabel>Depart on</FormLabel>
							<Controller
								name={`cities.${index}.departureDate`}
								control={control}
								render={({ field }) => (
									<Input
										type="date"
										min={new Date().toISOString().split('T')[0]}
										{...field}
									/>
								)}
							/>
						</FormControl>

						{index > 0 && (
							<Button
								mt="4"
								borderRadius={'1rem'}
								variant="outline"
								colorScheme="red"
								leftIcon={<MinusIcon />}
								onClick={() => remove(index)}>
								Remove City
							</Button>
						)}
					</Box>
				))}

				<FormControl
					mt="4"
					isRequired>
					<FormLabel>Passenger</FormLabel>
					<Flex
						gap={'1rem'}
						alignItems={'center'}>
						<IconButton
							aria-label="Increment passenger"
							icon={<AddIcon />}
							onClick={handleIncrementPassenger}
						/>
						<Input
							p={'1rem'}
							type="number"
							max={5}
							textAlign={'center'}
							{...register('passenger')}
						/>
						<Text>{passengerCount > 1 ? 'persons' : 'person'}</Text>
						<IconButton
							aria-label="Decrement passenger"
							icon={<MinusIcon />}
							onClick={handleDecrementPassenger}
						/>
					</Flex>
				</FormControl>

				<FormControl
					mt="4"
					isRequired>
					<FormLabel>Cabin class</FormLabel>
					<Controller
						name="cabin"
						control={control}
						render={({ field }) => (
							<Select
								{...field}
								value={field.value || 'economy'}>
								<option value="economy">Economy</option>
								<option value="business">Business</option>
								<option value="first">First</option>
							</Select>
						)}
					/>
				</FormControl>

				<Button
					mt="4"
					borderRadius={'1rem'}
					variant="outline"
					colorScheme="blue"
					leftIcon={<AddIcon />}
					onClick={() =>
						fields.length < 4 &&
						append({
							source: '',
							destination: '',
							departureDate: '',
						})
					}
					disabled={fields.length >= 4}
					isDisabled={fields.length >= 4}
					_disabled={{ bg: 'gray.200', color: 'gray.500' }}>
					Add City
				</Button>

				<Center>
					<SubmitButton
						width={'full'}
						marginTop={'2rem'}
						bgColor={'actionSecondary'}
						color={'primary'}
						borderRadius={'.5rem'}
						type={'submit'}
						text={'Search Flights'}
						maxWidth={'20rem'}
					/>
				</Center>
			</Box>
		</form>
	);
};

export default MultiCityForm;
