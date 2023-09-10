import { Box, Button, Flex, VStack, Text } from '@chakra-ui/react';
import ShowMoreInfo from '../Show More';
import FlightDetails from '../Flight Details';
import { useNavigate } from 'react-router-dom';

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
				<Flex
					p={'.5rem'}
					mt={'1rem'}
					justifyContent={'space-between'}
					alignItems={'center'}
					gap={'2rem'}>
					<VStack>
						<Text
							textAlign={'center'}
							fontSize={'1.5rem'}
							fontWeight={'600'}
							color={'actionPrimary'}>
							{totalPrice} {currency}
						</Text>
						<Text
							textAlign={'center'}
							fontSize={'.625rem'}
							fontWeight={'500'}>
							(per person)
						</Text>
					</VStack>

					<Button
						onClick={handleClick}
						bg={'actionSecondary'}
						borderRadius={'md'}
						boxShadow={'md'}
						color={'primary'}>
						Book Now
					</Button>
				</Flex>
			</Flex>
			<ShowMoreInfo />
		</Box>
	);
};

export default FlightFullInfoCard;
