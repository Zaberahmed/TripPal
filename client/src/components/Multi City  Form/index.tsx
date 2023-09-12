import { Box, Center, Flex, FormControl, FormLabel, Button, Input, Select, Text, IconButton } from '@chakra-ui/react';
import { useForm, SubmitHandler, Controller, useFieldArray, useWatch } from 'react-hook-form';
import SubmitButton from '../Submit Button';
import { AddIcon, MinusIcon } from '@chakra-ui/icons';
import { useEffect, useState } from 'react';
import { searchMultiCityFlights } from '../../services/api/flightApi';
import ErrorPortal from '../Error Portal';
import Error from '../Error';

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
	const [error, setError] = useState<boolean>(false);

	const { handleSubmit, control, register, setValue, getValues } = useForm<MultiCityFormData>({
		defaultValues: {
			cities: [
				{
					source: 'Dhaka',
					destination: "Cox's Bazar",
					departureDate: new Date().toISOString().slice(0, 10),
				},
			],
			passenger: 1,
			cabin: 'ECONOMY',
		},
	});

	const { fields, append, remove } = useFieldArray({
		control,
		name: 'cities',
	});

	const onSubmit: SubmitHandler<MultiCityFormData> = async (data) => {
		console.log(data);
		try {
			const result = await searchMultiCityFlights(data.cities[0].source, data.cities[0].destination, data.cities[0].departureDate, data.passenger, data.cabin);
			console.log(result);
			if (result.data.status) {
				console.log(result.data.data.flights);
			} else {
				setError(true);
			}
		} catch (error) {
			console.error(error);
		}
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

	const handleCloseError = () => {
		setError(false);
	};

	if (error) {
		return (
			<ErrorPortal>
				<Error onClose={handleCloseError} />
			</ErrorPortal>
		);
	}

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
								value={field.value || 'ECONOMY'}>
								<option value="ECONOMY">Economy</option>
								<option value="BUSINESS">Business</option>
								<option value="FIRST">First</option>
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
