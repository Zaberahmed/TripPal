import { Box, Button, Center, Flex, Text } from '@chakra-ui/react';
import axios from 'axios';
import FlightDetails from '../../components/Flight Details';
import { useEffect, useState } from 'react';
import { usePostTripMutation } from '../../rtk-store/api/tripApi';
import { OneWayFormData } from '../../components/One way Form';
import { RoundTripFormData } from '../../components/Round Trip Form';
import { MultiCityFormData } from '../../components/Multi City  Form';

const PaymentInfo = () => {
	const [postTrip] = usePostTripMutation();
	const [flight, setFlight] = useState({
		originStationCode: '',
		destinationStationCode: '',
		departureDateTime: '',
		arrivalDateTime: '',
		numStops: 0,
		displayName: '',
		logoUrl: '',
		currency: '',
		totalPrice: 0,
	});
	const [quantity, setQuantity] = useState(1);
	const [tripType, setTripType] = useState('');
	const [formData, setFormData] = useState<OneWayFormData | RoundTripFormData | MultiCityFormData | null>();

	useEffect(() => {
		const flight = localStorage.getItem('choosenFlight');
		if (flight) {
			const parsedFlight = JSON.parse(flight);
			if (parsedFlight) setFlight(parsedFlight);
		}
		const tripType = localStorage.getItem('tripType');
		if (tripType) {
			const parsedTripType = JSON.parse(tripType);
			setTripType(parsedTripType);
			if (tripType === 'ONE_WAY') {
				const formData = localStorage.getItem('oneWayFlightsFormData');
				setFormData(JSON.parse(formData!));
			} else if (tripType === 'ROUND_TRIP') {
				const formData = localStorage.getItem('roundTripFlightsFormData');
				setFormData(JSON.parse(formData!));
			} else {
				const formData = localStorage.getItem('multiCityFlightsFormData');
				setFormData(JSON.parse(formData!));
			}
		}
	}, []);

	useEffect(() => {
		console.log('formData:', formData);
		if (formData) {
			setQuantity(formData!.passenger);
		}
	}, [formData]);

	const handleCheckout = async () => {
		try {
			let data = {};
			if (tripType === 'ONE_WAY') {
				data = {
					tripType: tripType,
					oneWayTrip: formData,
					roundTrip: null,
					multiCity: null,
					flightDetails: flight,
				};
			} else if (tripType === 'ROUND_TRIP') {
				data = {
					tripType: tripType,
					oneWayTrip: null,
					roundTrip: formData,
					multiCity: null,
					flightDetails: flight,
				};
			} else {
				data = {
					tripType: tripType,
					oneWayTrip: null,
					roundTrip: null,
					multiCity: formData,
					flightDetails: flight,
				};
			}
			const result = await postTrip(data);
			console.log(result);
			if (result) {
				axios
					.post('http://localhost:4000/user/payment/create-checkout-session', {
						test: { price: flight.totalPrice * quantity, quantity: quantity },
					})
					.then((response) => {
						if (response.data.url) {
							window.location.href = response.data.url;
						}
					})
					.catch((err) => console.log(err.message));
			}
		} catch (error) {
			console.error(error);
		}
	};
	return (
		<>
			<Box
				bg={'beige'}
				p={'.5rem'}>
				<Center>
					<Text
						fontSize={'1.25rem'}
						fontWeight={'600'}>
						Flight details:
					</Text>
				</Center>
				<FlightDetails
					originStationCode={flight.originStationCode}
					destinationStationCode={flight.destinationStationCode}
					departureDateTime={flight.departureDateTime}
					arrivalDateTime={flight.arrivalDateTime}
					numStops={flight.numStops}
					displayName={flight.displayName}
					logoUrl={flight.logoUrl}
				/>

				<Box
					p={'.5rem'}
					mt={'2rem'}
					bg={'inherit'}
					border={'1px solid'}
					borderColor={'ebony'}
					borderRadius={'lg'}
					boxShadow={'lg'}>
					<Center mb={'1rem'}>
						<Text
							fontSize={'1.25rem'}
							fontWeight={'600'}>
							Payment details:
						</Text>
					</Center>
					<Flex
						justifyContent={'space-between'}
						p={'.25rem'}
						m={'.25rem 0'}>
						<Text>Ticket quantity:</Text>
						<Text>1</Text>
					</Flex>

					<Flex
						justifyContent={'space-between'}
						p={'.25rem'}
						m={'.25rem 0'}>
						<Text>Ticket fare:</Text>
						<Text>
							{flight.totalPrice} {flight.currency}
						</Text>
					</Flex>

					<Flex
						justify={'center'}
						gap={'1rem'}
						p={'.25rem'}
						m={'.25rem 0'}>
						<Text> Total payable:</Text>
						<Text>
							{' '}
							{flight.totalPrice * quantity} {flight.currency}
						</Text>
					</Flex>
					<Center>
						<Button
							onClick={handleCheckout}
							bg={'actionSecondary'}
							color={'primary'}
							boxShadow={'md'}>
							Pay Now
						</Button>
					</Center>
				</Box>
			</Box>
		</>
	);
};

export default PaymentInfo;
