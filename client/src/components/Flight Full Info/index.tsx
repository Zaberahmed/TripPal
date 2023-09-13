import { Box, Flex } from '@chakra-ui/react';
import ShowMoreInfo from '../Show More';
import FlightDetails from '../Flight Details';
import { useNavigate } from 'react-router-dom';
import BookNowCard from '../Book Now Card';
import { useEffect, useState } from 'react';

export interface FlightsDetails {
	originStationCode: string;
	destinationStationCode: string;
	departureDateTime: string;
	arrivalDateTime: string;
	classOfService: string;
	flightNumber: number;
	numStops: number;
	distanceInKM: number;
	logoUrl: string;
	displayName: string;
	currency: string;
	totalPrice: number;
}

const FlightsFullInfoCard: React.FC<{ flights: FlightsDetails[]; totalPrice: number }> = (props) => {
	const navigate = useNavigate();
	const [totalPrice, setTotalPrice] = useState(0);
	const [currency, setCurrency] = useState('');

	const handleClick = () => {
		localStorage.setItem('choosenFlights', JSON.stringify(props.flights));
		localStorage.setItem('totalPrice', JSON.stringify(totalPrice));
		localStorage.setItem('currecny', JSON.stringify(currency));
		navigate('/payment');
	};

	useEffect(() => {
		let totalPrice = 0;

		props.flights.forEach((flight) => {
			totalPrice += flight.totalPrice || 0;
		});
		setTotalPrice(totalPrice);
		setCurrency(props.flights[0].currency);
	}, [props.flights]);

	return (
		<Box
			bg={'beige'}
			p={'.5rem'}
			boxShadow={'lg'}
			borderRadius={'lg'}>
			<Flex
				mb={'1rem'}
				direction={'column'}>
				{props.flights.map((flight: any, index: number) => (
					<FlightDetails
						key={index}
						originStationCode={flight.originStationCode}
						destinationStationCode={flight.destinationStationCode}
						departureDateTime={flight.departureDateTime}
						arrivalDateTime={flight.arrivalDateTime}
						numStops={flight.numStops}
						logoUrl={flight.logoUrl}
						displayName={flight.displayName}
					/>
				))}

				<BookNowCard
					totalPrice={totalPrice}
					currency={currency}
					handleClick={handleClick}
				/>
			</Flex>
			<ShowMoreInfo />
		</Box>
	);
};

export default FlightsFullInfoCard;
