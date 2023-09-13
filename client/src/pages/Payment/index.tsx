import { Box, Center, Text } from '@chakra-ui/react';
import axios from 'axios';
import FlightDetails from '../../components/Flight Details';
import { useEffect, useState } from 'react';
import { usePostTripMutation } from '../../rtk-store/api/tripApi';
import { OneWayFormData } from '../../components/One way Form';
import { RoundTripFormData } from '../../components/Round Trip Form';
import { MultiCityFormData } from '../../components/Multi City  Form';
import PaymentDetails from '../../components/Payment Details';
import AdditionalInfoForm from '../../components/Additional Info form';
import { FlightsDetails } from '../../components/Flight Full Info';

const PaymentInfo = () => {
	const [postTrip] = usePostTripMutation();
	const [flights, setFlights] = useState<FlightsDetails[]>([
		{
			originStationCode: '',
			destinationStationCode: '',
			departureDateTime: '',
			arrivalDateTime: '',
			numStops: 0,
			displayName: '',
			logoUrl: '',
			currency: '',
			totalPrice: 0,
			classOfService: '',
			flightNumber: 0,
			distanceInKM: 0,
		},
	]);
	const [quantity, setQuantity] = useState(1);
	const [tripType, setTripType] = useState('');
	const [formData, setFormData] = useState<OneWayFormData | RoundTripFormData | MultiCityFormData | null>(null);
	const [totalPrice, setTotalPrice] = useState(0);
	const [currency, setCurrency] = useState('');

	useEffect(() => {
		const flights = localStorage.getItem('choosenFlights');
		const totalPrice = localStorage.getItem('totalPrice');
		const currency = localStorage.getItem('currency');

		if (totalPrice) {
			const parsedTotalPrice = JSON.parse(totalPrice);
			setTotalPrice(parsedTotalPrice);
		}
		if (currency) {
			const parsedCurrency = JSON.parse(currency);
			setCurrency(parsedCurrency);
		}

		if (flights) {
			const parsedFlights = JSON.parse(flights);
			if (parsedFlights) setFlights(parsedFlights);
		}
		const tripType = localStorage.getItem('tripType');
		if (tripType) {
			const parsedTripType = JSON.parse(tripType);
			setTripType(parsedTripType);
			if (parsedTripType === 'ONE_WAY') {
				const formData = localStorage.getItem('oneWayFlightsFormData');
				if (formData) {
					const parsedFormData = JSON.parse(formData);
					setFormData(parsedFormData);
				}
			} else if (parsedTripType === 'ROUND_TRIP') {
				const formData = localStorage.getItem('roundTripFlightsFormData');
				if (formData) {
					const parsedFormData = JSON.parse(formData);
					setFormData(parsedFormData);
				}
			} else {
				const formData = localStorage.getItem('multiCityFlightsFormData');
				if (formData) {
					const parsedFormData = JSON.parse(formData);
					setFormData(parsedFormData);
				}
			}
		}
	}, []);

	useEffect(() => {
		if (formData) {
			setQuantity(formData!.passenger);
		}
	}, [tripType]);

	const handleCheckout = async () => {
		try {
			let data = {};
			if (tripType === 'ONE_WAY') {
				data = {
					tripType: tripType,
					oneWayTrip: formData,
					roundTrip: null,
					multiCity: null,
					flightDetails: flights,
				};
			} else if (tripType === 'ROUND_TRIP') {
				data = {
					tripType: tripType,
					oneWayTrip: null,
					roundTrip: formData,
					multiCity: null,
					flightDetails: flights,
				};
			} else {
				data = {
					tripType: tripType,
					oneWayTrip: null,
					roundTrip: null,
					multiCity: formData,
					flightDetails: flights,
				};
			}
			const result = await postTrip(data);
			console.log('result:', result);
			if (result) {
				axios
					.post(`${import.meta.env.VITE_BACKEND_URL}:${import.meta.env.VITE_BACKEND_PORT}/user/payment/create-checkout-session`, {
						test: { price: totalPrice * quantity, quantity: quantity },
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
						fontWeight={'600'}
						mb={'1rem'}>
						Flight details
					</Text>
				</Center>
				{flights.map((flight: any, index: number) => (
					<FlightDetails
						key={index}
						originStationCode={flight.originStationCode}
						destinationStationCode={flight.destinationStationCode}
						departureDateTime={flight.departureDateTime}
						arrivalDateTime={flight.arrivalDateTime}
						numStops={flight.numStops}
						displayName={flight.displayName}
						logoUrl={flight.logoUrl}
					/>
				))}

				<AdditionalInfoForm />

				<PaymentDetails
					quantity={quantity}
					totalPrice={totalPrice}
					currency={currency}
					handleCheckout={handleCheckout}
				/>
			</Box>
		</>
	);
};

export default PaymentInfo;
