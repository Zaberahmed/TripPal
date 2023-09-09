import { Box, Button, Center, Flex, Text } from '@chakra-ui/react';
import axios from 'axios';
import FlightDetails from '../../components/Flight Details';
import { useEffect, useState } from 'react';

const PaymentInfo = () => {
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
	const [price, setPrice] = useState(0);

	useEffect(() => {
		const flight = localStorage.getItem('choosenFlight');
		if (flight) {
			const parsedFlight = JSON.parse(flight);
			if (parsedFlight) setFlight(parsedFlight);
		}
		const formData = localStorage.getItem('oneWayFormData');
		if (formData) {
			const quantity = JSON.parse(formData).quantity;
			setQuantity(quantity);
		}
	}, []);

	const handleCheckout = () => {
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
