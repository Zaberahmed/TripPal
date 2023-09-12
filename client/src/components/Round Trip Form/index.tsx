import { Box, Center, Flex, FormControl, FormLabel, IconButton, Input, Select, Text } from '@chakra-ui/react';
import { useForm, SubmitHandler, Controller, useWatch } from 'react-hook-form';
import SubmitButton from '../Submit Button';
import { AddIcon, MinusIcon } from '@chakra-ui/icons';
import { useEffect, useState } from 'react';
import cities from './../../data/airports.json';
import { searchRoundTripFlights } from '../../services/api/flightApi';
import { useNavigate } from 'react-router-dom';
import ErrorPortal from '../Error Portal';
import Error from '../Error';

export type RoundTripFormData = {
	source: string;
	sourceCity: string;
	destination: string;
	destinationCity: string;
	departureDate: string;
	returnDate: string;
	passenger: number;
	cabin: string;
};

const RoundTripForm = () => {
	const [passengerCount, setPassengerCount] = useState<number>(1);
	const navigate = useNavigate();
	const [error, setError] = useState(false);

	const {
		handleSubmit,
		control,
		register,
		formState: { errors },
		setValue,
		getValues,
	} = useForm<RoundTripFormData>({
		defaultValues: {
			source: 'DAC',
			sourceCity: 'Dhaka',
			destination: 'CXB',
			destinationCity: "Cox's Bazar",
			departureDate: new Date().toISOString().slice(0, 10),
			returnDate: new Date(new Date().getTime() + 2 * 24 * 60 * 60 * 1000).toISOString().slice(0, 10),
			passenger: 1,
			cabin: 'ECONOMY',
		},
	});

	const onSubmit: SubmitHandler<RoundTripFormData> = async (data) => {
		try {
			data.sourceCity = data.source;
			data.destinationCity = data.destination;

			const sourceCity = cities.find((city) => city.cityName.toLowerCase() === data.source.toLowerCase());
			const destinationCity = cities.find((city) => city.cityName.toLowerCase() === data.destination.toLowerCase());

			if (sourceCity && destinationCity) {
				data.source = sourceCity.iataCode;
				data.destination = destinationCity.iataCode;
			}

			const result = await searchRoundTripFlights(data.source, data.destination, data.departureDate, data.passenger, data.cabin, data.returnDate);

			if (result.data.status) {
				const flights = result.data.data.flights;

				localStorage.setItem('roundTripFlights', JSON.stringify(flights));
				localStorage.setItem('roundTripFlightsFormData', JSON.stringify(data));
				localStorage.setItem('tripType', JSON.stringify('ROUND_TRIP'));
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

	const departureDate = useWatch({
		control,
		name: 'departureDate',
	});

	useEffect(() => {
		const departureDateValue = new Date(departureDate);
		const defaultReturnDate = new Date(departureDateValue.getTime() + 2 * 24 * 60 * 60 * 1000).toISOString().slice(0, 10);

		setValue('returnDate', defaultReturnDate);
	}, [departureDate, setValue]);

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
						name="source"
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
						name="destination"
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
					<FormLabel>Return on</FormLabel>
					<Controller
						name="returnDate"
						control={control}
						render={({ field }) => (
							<Input
								type="date"
								min={new Date(new Date().getTime() + 2 * 24 * 60 * 60 * 1000).toISOString().split('T')[0]}
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

export default RoundTripForm;
