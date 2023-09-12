import { Box, Center, Flex, FormControl, FormLabel, IconButton, Input, Select, Text } from '@chakra-ui/react';
import { useForm, SubmitHandler, Controller } from 'react-hook-form';
import SubmitButton from '../Submit Button';
import { AddIcon, MinusIcon } from '@chakra-ui/icons';
import { useState } from 'react';
import { searchOneWayFlights } from '../../services/api/flightApi';
import ErrorPortal from '../Error Portal';
import Error from '../Error';
import { useNavigate } from 'react-router-dom';
import cities from './../../data/airports.json';

export type OneWayFormData = {
	source: string;
	sourceCity: string;
	destination: string;
	destinationCity: string;
	departureDate: string;
	passenger: number;
	cabin: string;
};

const OneWayForm = () => {
	const [passengerCount, setPassengerCount] = useState<number>(1);
	const [error, setError] = useState(false);
	const navigate = useNavigate();

	const { handleSubmit, control, register, setValue, getValues } = useForm<OneWayFormData>({
		defaultValues: {
			source: 'DAC',
			sourceCity: 'Dhaka',
			destination: 'CXB',
			destinationCity: "Cox's Bazar",
			departureDate: new Date().toISOString().slice(0, 10),
			passenger: 1,
			cabin: 'ECONOMY',
		},
	});

	const onSubmit: SubmitHandler<OneWayFormData> = async (data) => {
		try {
			data.sourceCity = data.source;
			data.destinationCity = data.destination;

			const sourceCity = cities.find((city) => city.cityName.toLowerCase() === data.source.toLowerCase());
			const destinationCity = cities.find((city) => city.cityName.toLowerCase() === data.destination.toLowerCase());

			if (sourceCity && destinationCity) {
				data.source = sourceCity.iataCode;
				data.destination = destinationCity.iataCode;
			}

			const result = await searchOneWayFlights(data.source, data.destination, data.departureDate, data.passenger, data.cabin);

			if (result.data.status) {
				const flights = result.data.data.flights;

				localStorage.setItem('oneWayFlights', JSON.stringify(flights));
				localStorage.setItem('oneWayFlightsFormData', JSON.stringify(data));
				localStorage.setItem('tripType', JSON.stringify('ONE_WAY'));
				navigate('/flight');
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
				<FormControl isRequired>
					<FormLabel>Flying from</FormLabel>
					<Controller
						name="sourceCity"
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
						name="destinationCity"
						control={control}
						render={({ field }) => (
							<Input
								type="text"
								{...field}
								placeholder="Cox's bazar"
							/>
						)}
					/>
				</FormControl>

				<FormControl
					mt="4"
					isRequired>
					<FormLabel>Depart on</FormLabel>
					<Controller
						name="departureDate"
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

export default OneWayForm;
