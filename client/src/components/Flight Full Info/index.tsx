import { Box, Flex } from '@chakra-ui/react';
import ShowMoreInfo from '../Show More';
import FlightDetails from '../Flight Details';
import { useNavigate } from 'react-router-dom';
import BookNowCard from '../Book Now Card';

export interface FlightDetails {
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

const FlightFullInfoCard: React.FC<FlightDetails> = ({ originStationCode, destinationStationCode, departureDateTime, arrivalDateTime, classOfService, flightNumber, numStops, distanceInKM, logoUrl, displayName, currency, totalPrice }) => {
	const navigate = useNavigate();
	const flight = { originStationCode, destinationStationCode, departureDateTime, arrivalDateTime, classOfService, flightNumber, numStops, distanceInKM, logoUrl, displayName, currency, totalPrice };

	const handleClick = () => {
		localStorage.setItem('choosenFlight', JSON.stringify(flight));
		navigate('/payment');
	};

	return (
		<Box
			bg={'beige'}
			p={'.5rem'}
			boxShadow={'lg'}
			borderRadius={'lg'}>
			<Flex
				mb={'1rem'}
				direction={'column'}>
				<FlightDetails
					originStationCode={originStationCode}
					destinationStationCode={destinationStationCode}
					departureDateTime={departureDateTime}
					arrivalDateTime={arrivalDateTime}
					numStops={numStops}
					logoUrl={logoUrl}
					displayName={displayName}
				/>
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

export default FlightFullInfoCard;
