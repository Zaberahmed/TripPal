import { Box, Center, Flex, FormControl, FormLabel, IconButton, Input, Text } from '@chakra-ui/react';
import { useForm, SubmitHandler, Controller } from 'react-hook-form';
import SubmitButton from '../Submit Button';
import { AddIcon, MinusIcon } from '@chakra-ui/icons';
import { useState } from 'react';

type HotelBookingFormData = {
	city: string;
	checkInDate: string;
	checkOutDate: string;
	guest: number;
	room: number;
};

const HotelBookingForm = () => {
	const [guestCount, setGuestCount] = useState<number>(1);
	const [roomCount, setRoomCount] = useState<number>(1);

	const {
		handleSubmit,
		control,
		register,
		formState: { errors },
		setValue,
		getValues,
	} = useForm<HotelBookingFormData>({
		defaultValues: {
			city: 'Dhaka',
			checkInDate: new Date().toISOString().slice(0, 10),
			checkOutDate: new Date(new Date().getTime() + 2 * 24 * 60 * 60 * 1000).toISOString().slice(0, 10),
			guest: 1,
			room: 1,
		},
	});

	const onSubmit: SubmitHandler<HotelBookingFormData> = (data) => {
		console.log(data);
	};

	const handleIncrement = (field: 'guest' | 'room') => {
		const currentValue = getValues(field);
		if (currentValue < 5) {
			setValue(field, currentValue + 1);
			if (field === 'guest') {
				setGuestCount(currentValue + 1);
			} else if (field === 'room') {
				setRoomCount(currentValue + 1);
			}
		}
	};

	const handleDecrement = (field: 'guest' | 'room') => {
		const currentValue = getValues(field);
		if (currentValue > 1) {
			setValue(field, currentValue - 1);
			if (field === 'guest') {
				setGuestCount(currentValue - 1);
			} else if (field === 'room') {
				setRoomCount(currentValue - 1);
			}
		}
	};

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<Box>
				<FormControl isRequired>
					<FormLabel>Select City</FormLabel>
					<Controller
						name="city"
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
					<FormLabel>Check In</FormLabel>
					<Controller
						name="checkInDate"
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
					<FormLabel>Check Out</FormLabel>
					<Controller
						name="checkOutDate"
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
					<FormLabel>Guest</FormLabel>
					<Flex
						gap={'1rem'}
						alignItems={'center'}>
						<IconButton
							aria-label={'Increment guest'}
							icon={<AddIcon />}
							onClick={() => handleIncrement('guest')}
						/>
						<Input
							p={'1rem'}
							type="number"
							max={5}
							{...register('guest')}
						/>
						<Text>{guestCount > 1 ? 'persons' : 'person'}</Text>
						<IconButton
							aria-label="Decrement guest"
							icon={<MinusIcon />}
							onClick={() => handleDecrement('guest')}
						/>
					</Flex>
				</FormControl>

				<FormControl
					mt="4"
					isRequired>
					<FormLabel>Room</FormLabel>
					<Flex
						gap={'1rem'}
						alignItems={'center'}>
						<IconButton
							aria-label="Increment room"
							icon={<AddIcon />}
							onClick={() => handleIncrement('room')}
						/>
						<Input
							p={'1rem'}
							type="number"
							max={5}
							{...register('room')}
						/>
						<Text>{roomCount > 1 ? 'rooms' : 'room'}</Text>
						<IconButton
							aria-label="Decrement room"
							icon={<MinusIcon />}
							onClick={() => handleDecrement('room')}
						/>
					</Flex>
				</FormControl>

				<Center>
					<SubmitButton
						width={'full'}
						marginTop={'2rem'}
						bgColor={'actionSecondary'}
						color={'primary'}
						borderRadius={'.5rem'}
						type={'submit'}
						text={'Search Hotels'}
						maxWidth={'20rem'}
					/>
				</Center>
			</Box>
		</form>
	);
};

export default HotelBookingForm;
