import { Box, Center, Flex, FormControl, FormLabel, IconButton, Input, Select, Text } from '@chakra-ui/react';
import { useForm, SubmitHandler, Controller } from 'react-hook-form';
import SubmitButton from '../Submit Button';
import { AddIcon, MinusIcon } from '@chakra-ui/icons';
import { useState } from 'react';
import { searchOneWayFlights } from '../../services/api/flightApi';

type OneWayFormData = {
	source: string;
	destination: string;
	departureDate: string;
	passenger: number;
	cabin: string;
};

const OneWayForm = () => {
	const [passengerCount, setPassengerCount] = useState<number>(1);

	const {
		handleSubmit,
		control,
		register,
		formState: { errors },
		setValue,
		getValues,
	} = useForm<OneWayFormData>({
		defaultValues: {
			source: 'Dhaka',
			destination: "Cox's Bazar",
			departureDate: new Date().toISOString().slice(0, 10),
			passenger: 1,
			cabin: 'ECONOMY',
		},
	});

	const onSubmit: SubmitHandler<OneWayFormData> = async (data) => {
		console.log(data);
		try {
			const result = await searchOneWayFlights(data.source, data.destination, data.departureDate, data.passenger, data.cabin);
			console.log('result:', result);
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
