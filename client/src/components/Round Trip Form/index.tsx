import { Box, Center, Flex, FormControl, FormLabel, IconButton, Input, Select, Text } from '@chakra-ui/react';
import { useForm, SubmitHandler, Controller, useWatch } from 'react-hook-form';
import SubmitButton from '../Submit Button';
import { AddIcon, MinusIcon } from '@chakra-ui/icons';
import { useEffect, useState } from 'react';

export type RoundTripFormData = {
	source: string;
	destination: string;
	departureDate: string;
	returnDate: string;
	passenger: number;
	cabin: string;
};

const RoundTripForm = () => {
	const [passengerCount, setPassengerCount] = useState<number>(1);

	const {
		handleSubmit,
		control,
		register,
		formState: { errors },
		setValue,
		getValues,
	} = useForm<RoundTripFormData>({
		defaultValues: {
			source: 'Dhaka',
			destination: "Cox's Bazar",
			departureDate: new Date().toISOString().slice(0, 10),
			returnDate: new Date(new Date().getTime() + 2 * 24 * 60 * 60 * 1000).toISOString().slice(0, 10),
			passenger: 1,
			cabin: 'economy',
		},
	});

	const onSubmit: SubmitHandler<RoundTripFormData> = (data) => {
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

	const departureDate = useWatch({
		control,
		name: 'departureDate',
	});

	useEffect(() => {
		const departureDateValue = new Date(departureDate);
		const defaultReturnDate = new Date(departureDateValue.getTime() + 2 * 24 * 60 * 60 * 1000).toISOString().slice(0, 10);

		setValue('returnDate', defaultReturnDate);
	}, [departureDate, setValue]);

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
								value={field.value || 'economy'}>
								<option value="economy">Economy</option>
								<option value="business">Business</option>
								<option value="first">First</option>
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
